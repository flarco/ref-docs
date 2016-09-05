##Word to Markdown
<https://github.com/benbalter/word-to-markdown>



## Outlook Unified Inbox
<https://www.reddit.com/r/Windows10/comments/3h6pja/unified_inbox_in_outlook_2016_anyone_have_a/>

```vba
Sub UnifiedInbox()
Dim myOlApp As New Outlook.Application
txtSearch = "folder:Inbox received: (this week)"
myOlApp.ActiveExplorer.Search txtSearch, olSearchScopeAllFolders
Set myOlApp = Nothing
End Sub


Sub UnifiedInboxFlagged()
Dim myOlApp As New Outlook.Application
txtSearch = "folder:Inbox followupflag: followup flag"
myOlApp.ActiveExplorer.Search txtSearch, olSearchScopeAllFolders
Set myOlApp = Nothing
End Sub

Sub UnifiedSentbox()
Dim myOlApp As New Outlook.Application
txtSearch = "folder: (Sent Mail) sent: (this week)"
myOlApp.ActiveExplorer.Search txtSearch, olSearchScopeAllFolders
Set myOlApp = Nothing
End Sub
```


## Kibana

### Discover
<https://www.timroes.de/2015/02/07/kibana-4-tutorial-part-2-discover/>

![image](https://cloud.githubusercontent.com/assets/7671010/17279497/063269ea-5743-11e6-8b21-239a1903123e.png)
