// this is google apps script code for google sheets.
// it adds a custom menu item to the google sheets UI.
// when clicked, it prompts the user to enter a URL
// it then fetches the favicon for that URL and appends
// a new row to the sheet with the URL, favicon URL, and timestamp

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Add Link")
    .addItem("Add Link", "showPrompt")
    .addToUi();
}

const getDomainFromUrl = (url) => {
  const regex = /^(?:https?:\/\/)?(?:www\.)?([^/]+)/i;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const getFaviconUrl = (url) => {
  const domain = getDomainFromUrl(url);
  const response = UrlFetchApp.fetch(`https://www.google.com/s2/favicons?domain=${domain}&sz=512`);
  const favicon_url = response.getHeaders()["Content-Location"];

  // if it's null, that's fine. the user can manually add an icon 
  // using the spreadsheet, or let the default one be displayed
  return favicon_url;
}

const getArticleTitle = (url) => {
  try {
    const response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    const html = response.getContentText();
    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    if (titleMatch && titleMatch[1]) {
      return titleMatch[1];
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
}

function showPrompt() {
  var ui = SpreadsheetApp.getUi();

  var result = ui.prompt(
    "Please enter the article URL:",
    ui.ButtonSet.OK_CANCEL,
  );

  var button = result.getSelectedButton();
  if (button == ui.Button.OK) {
    const article_url = result.getResponseText();
    const icon_url = getFaviconUrl(article_url);
    const article_title = getArticleTitle(article_url);
    const created_at = new Date().toLocaleDateString();
    const row = [article_url, article_title, icon_url, null, created_at];
    SpreadsheetApp.getActiveSheet().appendRow(row);
  }
}
