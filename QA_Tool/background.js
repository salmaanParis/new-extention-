chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
  try {
    if (info.status === 'loading') {
      // Check if the tab is loading a new page
      await chrome.sidePanel.setOptions({
        tabId,
        enabled: false // Disable the side panel
      });
      console.log(`Side panel disabled for tab: ${tabId}`);
    }
  } catch (error) {
    console.error('Error updating side panel options:', error);
  }
});

// Optional: Allow the user to open the side panel by clicking on the extension's action icon
chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
    .then(() => console.log('Panel behavior set to open on action click.'))
    .catch((error) => console.error('Error setting panel behavior:', error));
});
