# Setup Github

1. Clone my repository onto your computer 
    ```
    git clone https://github.com/akjetma/test.git
    cd test
    ```
2. Create a new repository on github (don't initialize with a readme)
3. Push my code to your repo
    ```
    git remote remove origin
    git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
    git push -u origin main
    ```
4. Go to your repository’s Settings → Pages. Under “Source”, select:
    
    > Branch: main

    > Folder: / (root)

    Click Save.

# Setup the sheet

1. Create a copy of the spreadsheet i sent you in your own google sheets account.
2. Click File -> Share -> Publish to Web
3. Change 'entire document' to 'Sheet1' and hit publish
4. Copy the spreadsheet id from the spreadsheet url (between `d/` and `/edit`)
5. Paste the id into the SHEET_ID constant at the top of index.js
6. In the terminal, navigate to the project folder (`cd wherever/you/put/it`)
7. do `git commit -a -m "update id"` then `git push origin main`
8. the website will redeploy (takes about a minute or so) and you can now use your spreadsheet as the backend for the website. changes are usually immediate but could take a minute or so to be reflected on the website. 
9. you may need to go to Extensions -> Apps Script and copy the code in `google_sheets_input_helper.js` into there if you don't see `Add Link` at the top of the spreadsheet (not sure if this is copied over when you copy a spreadsheet).

# Custom Domain 

Follow these instructions to point your domain name to the website: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages

We can also walk through this on the phone or in-person.