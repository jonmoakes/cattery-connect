import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../../styles/div/div.styles";

import { BlackHr } from "../../../styles/hr/hr.styles";

const LocalStorage = () => (
  <>
    <ParentDiv>
      <CustomBalancedText type="h2">local storage:</CustomBalancedText>
      <CustomBalancedText>
        We use local storage to save your preferences for the number of rows
        displayed in the data tables within the app.
      </CustomBalancedText>

      <CustomBalancedText type="h3">managing local storage:</CustomBalancedText>

      <CustomBalancedText>
        If you wish to delete data stored in local storage, follow the
        instructions for your browser below:
      </CustomBalancedText>

      <BlackHr />

      <CustomBalancedText type="h3">Google Chrome:</CustomBalancedText>

      <CustomBalancedText>
        Open Chrome and click the three vertical dots (menu) in the top-right
        corner.
      </CustomBalancedText>

      <CustomBalancedText>Select "Settings."</CustomBalancedText>

      <CustomBalancedText>
        Scroll down and click on "Privacy and security."
      </CustomBalancedText>

      <CustomBalancedText>
        Click "Cookies and other site data" and then select "See all cookies and
        site data."
      </CustomBalancedText>
      <CustomBalancedText>
        Use the search bar to find your app’s domain. Click the trash bin icon
        next to the relevant site to delete its local storage data.
      </CustomBalancedText>

      <BlackHr />
      <CustomBalancedText type="h3">Mozilla Firefox:</CustomBalancedText>

      <CustomBalancedText>
        Open Firefox and click the three horizontal lines (menu) in the
        top-right corner.
      </CustomBalancedText>

      <CustomBalancedText>
        Select "Settings," then click "Privacy & Security" on the left sidebar.
      </CustomBalancedText>

      <CustomBalancedText>
        Scroll down to "Cookies and Site Data" and click "Manage Data."
      </CustomBalancedText>

      <CustomBalancedText>
        Use the search bar to find your app’s domain, select the site, and click
        "Remove Selected."
      </CustomBalancedText>

      <BlackHr />

      <CustomBalancedText type="h3">Microsoft Edge:</CustomBalancedText>

      <CustomBalancedText>
        Open Edge and click the three horizontal dots (menu) in the top-right
        corner.
      </CustomBalancedText>

      <CustomBalancedText>
        Select "Settings," then click "Cookies and site permissions" on the left
        sidebar.
      </CustomBalancedText>

      <CustomBalancedText>
        Click "Manage and delete cookies and site data," then select "See all
        cookies and site data."
      </CustomBalancedText>
      <CustomBalancedText>
        Use the search bar to find your app’s domain, then click the trash bin
        icon next to the relevant site to delete its local storage data.
      </CustomBalancedText>

      <BlackHr />

      <CustomBalancedText type="h3">Safari (macOS):</CustomBalancedText>
      <CustomBalancedText>
        Open Safari and click "Safari" in the top menu bar.
      </CustomBalancedText>
      <CustomBalancedText>
        Select "Preferences" and go to the "Privacy" tab.
      </CustomBalancedText>
      <CustomBalancedText>
        Click "Manage Website Data," use the search bar to find your app’s
        domain, select the site, and click "Remove."
      </CustomBalancedText>

      <BlackHr />

      <CustomBalancedText type="h3">Safari ( iOS )</CustomBalancedText>

      <CustomBalancedText>
        Open the Settings app and scroll down to 'apps'.
      </CustomBalancedText>

      <CustomBalancedText>find or search for 'safari'.</CustomBalancedText>

      <CustomBalancedText>
        Scroll down and tap "Advanced," then tap "Website Data."
      </CustomBalancedText>
      <CustomBalancedText>
        Use the search bar to find your app’s domain, swipe left on the relevant
        entry, and tap "Delete."
      </CustomBalancedText>

      <BlackHr />

      <CustomBalancedText type="h2"> Important Note:</CustomBalancedText>

      <CustomBalancedText>
        Deleting local storage data may affect your user experience on the app
        by removing saved preferences, login information, and other settings.
        Please ensure you have saved any important information before
        proceeding.
      </CustomBalancedText>
    </ParentDiv>
  </>
);

export default LocalStorage;
