<div class="WordSection1">

**<span style="font-size:18.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">Configuration</span>**<span style="font-size:18.0pt;font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;
color:#4F81BD"></span>

**<span style="font-size:14.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">Installation</span>**<span style="font-size:14.0pt;font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;
color:#4F81BD"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">apt-get install postgresql postgresql-client</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">Default Port: 5433 or 5432</span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:14.0pt;
mso-ascii-font-family:Calibri;mso-fareast-font-family:&quot;Times New Roman&quot;;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
color:#2E75B5">Manual Installation</span>**

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">First, initialize<span style="mso-spacerun:yes"></span> directory:</span>

<span style="font-size:11.0pt;font-family:Consolas;mso-bidi-font-family:&quot;Courier New&quot;">./initdb /dbdir</span><span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">Then run to start:</span>

<span style="font-size:11.0pt;font-family:Consolas;mso-bidi-font-family:&quot;Courier New&quot;">./pg_ctl -D /dbdir -l logfile start</span><span style="font-size:11.0pt;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">To stop :</span>

<span style="font-size:11.0pt;font-family:Consolas;mso-bidi-font-family:&quot;Courier New&quot;">./pg_ctl -D /dbdir -l logfile stop</span><span style="font-size:11.0pt;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">To restart:</span>

<span style="font-size:11.0pt;font-family:Consolas;mso-bidi-font-family:&quot;Courier New&quot;">./pg_ctl -D /dbdir -l logfile restart</span><span style="font-size:11.0pt;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

**<span style="font-size:14.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">Python</span>**<span style="font-size:14.0pt;font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;
color:#4F81BD"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">[http://initd.org/psycopg/docs/usage.html](http://initd.org/psycopg/docs/usage.html)</span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:14.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">Config File</span>**<span style="font-size:14.0pt;font-family:Cambria;mso-bidi-font-family:
&quot;Times New Roman&quot;;color:#4F81BD"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">/etc/postgresql/9.3/main/postgresql.conf</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:14.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">Allow all remote connection</span>**<span style="font-size:14.0pt;font-family:Cambria;
mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">Append line to file **/etc/postgresql/9.3/main/pg_hba.conf**</span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">host<span style="mso-spacerun:yes"></span> all<span style="mso-spacerun:yes"></span> all<span style="mso-spacerun:yes"></span> 0.0.0.0/0<span style="mso-spacerun:yes"></span> trust</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">Append line to file **/etc/postgresql/9.3/main/postgresql.conf**</span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">listen_addresses = '*'</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:14.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">Start/Stop</span>**<span style="font-size:14.0pt;font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;
color:#4F81BD"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">/etc/init.d/postgresql start</span><span style="font-size:
11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">/etc/init.d/postgresql restart</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">/etc/init.d/postgresql stop</span><span style="font-size:
11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:14.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">Install Client</span>**<span style="font-size:14.0pt;font-family:Cambria;mso-bidi-font-family:
&quot;Times New Roman&quot;;color:#4F81BD"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">sudo apt-get install postgresql-client</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:14.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">Query Logging</span>**<span style="font-size:14.0pt;font-family:Cambria;mso-bidi-font-family:
&quot;Times New Roman&quot;;color:#4F81BD"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">User Session:</span>**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">SELECT set_config('log_statement', 'all', true);</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">Long term:</span>**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">In your **postgresql.conf** file, change the log_statement setting to 'all':</span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">log_line_prefix = '%t %c %u ' # time sessionid user</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">log_directory = 'pg_log'<span style="mso-spacerun:yes">                   </span></span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">log_filename = 'postgresql-queries.log'</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">log_statement = 'all'</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">logging_collector = on</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">Log Analyzer</span>**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">[**http://pgfouine.projects.pgfoundry.org/**](http://pgfouine.projects.pgfoundry.org/)</span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:18.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">Command Line</span>**<span style="font-size:18.0pt;font-family:Cambria;mso-bidi-font-family:
&quot;Times New Roman&quot;;color:#4F81BD"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<table class="MsoNormalTable" border="1" cellspacing="0" cellpadding="0" title="" summary="" style="border-collapse:collapse;border:none;mso-border-alt:solid #A3A3A3 1.0pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0in 0in 0in 0in">

<tbody>

<tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">

<td width="82" valign="top" style="width:82.45pt;border:solid #A3A3A3 1.0pt;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

**<span style="font-size:11.0pt;mso-ascii-font-family:
  Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:red">COMMAND</span>**<span style="font-size:11.0pt;mso-ascii-font-family:
  Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:red"></span>

</td>

<td width="365" valign="top" style="width:364.7pt;border:solid #A3A3A3 1.0pt;
  border-left:none;mso-border-left-alt:solid #A3A3A3 1.0pt;padding:4.0pt 4.0pt 4.0pt 4.0pt">

**<span style="font-size:11.0pt;mso-ascii-font-family:
  Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:red">DESCRIPTION</span>**<span style="font-size:11.0pt;mso-ascii-font-family:
  Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:red"></span>

</td>

</tr>

<tr style="mso-yfti-irow:1">

<td width="82" valign="top" style="width:82.45pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">\?</span>

</td>

<td width="365" valign="top" style="width:364.7pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">Help</span>

</td>

</tr>

<tr style="mso-yfti-irow:2">

<td width="82" valign="top" style="width:82.45pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">\q</span>

</td>

<td width="365" valign="top" style="width:364.7pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">Quit/Exit</span>

</td>

</tr>

<tr style="mso-yfti-irow:3">

<td width="82" valign="top" style="width:82.45pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">\c [db]</span>

</td>

<td width="365" valign="top" style="width:364.7pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">Connect to a database</span>

</td>

</tr>

<tr style="mso-yfti-irow:4">

<td width="82" valign="top" style="width:82.45pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">\d [table]</span>

</td>

<td width="365" valign="top" style="width:364.7pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">Describe \ Show table definition including triggers</span>

</td>

</tr>

<tr style="mso-yfti-irow:5">

<td width="82" valign="top" style="width:82.45pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">\dt *.*</span>

</td>

<td width="370" valign="top" style="width:369.7pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">List tables from all schemas (if *.* is omitted will only show SEARCH_PATH ones)</span>

</td>

</tr>

<tr style="mso-yfti-irow:6">

<td width="82" valign="top" style="width:82.45pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">\l</span>

</td>

<td width="365" valign="top" style="width:364.7pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">List databases</span>

</td>

</tr>

<tr style="mso-yfti-irow:7">

<td width="82" valign="top" style="width:82.45pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">\i</span>

</td>

<td width="365" valign="top" style="width:364.7pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">executes the sql commands within the sql file. Example: \i tournament.sql</span>

</td>

</tr>

<tr style="mso-yfti-irow:8">

<td width="82" valign="top" style="width:82.45pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">\dn</span>

</td>

<td width="365" valign="top" style="width:364.7pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">List schemas</span>

</td>

</tr>

<tr style="mso-yfti-irow:9">

<td width="82" valign="top" style="width:82.45pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">\df</span>

</td>

<td width="365" valign="top" style="width:364.7pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">List functions</span>

</td>

</tr>

<tr style="mso-yfti-irow:10">

<td width="82" valign="top" style="width:82.45pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">\dv</span>

</td>

<td width="365" valign="top" style="width:364.7pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">List views</span>

</td>

</tr>

<tr style="mso-yfti-irow:11;mso-yfti-lastrow:yes">

<td width="84" valign="top" style="width:83.9pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">\df+ [function]</span>

</td>

<td width="363" valign="top" style="width:363.3pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">Show function SQL code. \x before pretty-formats it</span>

</td>

</tr>

</tbody>

</table>

**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;mso-hansi-font-family:
Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<table class="MsoNormalTable" border="1" cellspacing="0" cellpadding="0" title="" summary="" style="border-collapse:collapse;border:none;mso-border-alt:solid #A3A3A3 1.0pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0in 0in 0in 0in">

<tbody>

<tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">

<td width="316" valign="top" style="width:315.6pt;border:solid #A3A3A3 1.0pt;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

**<span style="font-size:11.0pt;mso-ascii-font-family:
  Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:red">QUERY</span>**<span style="font-size:11.0pt;mso-ascii-font-family:
  Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:red"></span>

</td>

<td width="230" valign="top" style="width:230.05pt;border:solid #A3A3A3 1.0pt;
  border-left:none;mso-border-left-alt:solid #A3A3A3 1.0pt;padding:4.0pt 4.0pt 4.0pt 4.0pt">

**<span style="font-size:11.0pt;mso-ascii-font-family:
  Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:red">DESCRIPTION</span>**<span style="font-size:11.0pt;mso-ascii-font-family:
  Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:red"></span>

</td>

</tr>

<tr style="mso-yfti-irow:1">

<td width="316" valign="top" style="width:315.6pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">SELECT * FROM pg_proc WHERE proname='__procedurename__'</span>

</td>

<td width="230" valign="top" style="width:230.05pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black"><span style="mso-spacerun:yes"> </span>List procedure/function</span>

</td>

</tr>

<tr style="mso-yfti-irow:2">

<td width="316" valign="top" style="width:315.6pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">SELECT * FROM pg_views WHERE viewname='__viewname__';</span>

</td>

<td width="230" valign="top" style="width:230.05pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black"><span style="mso-spacerun:yes"> </span>List view (including the definition)</span>

</td>

</tr>

<tr style="mso-yfti-irow:3">

<td width="316" valign="top" style="width:315.6pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">SELECT pg_size_pretty(pg_total_relation_size('__table_name__'));</span>

</td>

<td width="230" valign="top" style="width:230.05pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black"><span style="mso-spacerun:yes"> </span>Show DB table space in use</span>

</td>

</tr>

<tr style="mso-yfti-irow:4">

<td width="316" valign="top" style="width:315.6pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">SELECT pg_size_pretty(pg_database_size('__database_name__'));</span>

</td>

<td width="230" valign="top" style="width:230.05pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black"><span style="mso-spacerun:yes"> </span>Show DB space in use</span>

</td>

</tr>

<tr style="mso-yfti-irow:5">

<td width="316" valign="top" style="width:315.6pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">show statement_timeout;</span>

</td>

<td width="230" valign="top" style="width:230.05pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black"><span style="mso-spacerun:yes"> </span>Show current user's statement timeout</span>

</td>

</tr>

<tr style="mso-yfti-irow:6">

<td width="316" valign="top" style="width:315.6pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">SELECT pid, datname, waiting, state, query FROM pg_stat_activity WHERE datname='__database_name__';</span>

</td>

<td width="235" valign="top" style="width:235.0pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black"><span style="mso-spacerun:yes"> </span>Show queries being executed at a certain DB. Can also display query time, etc.</span>

</td>

</tr>

<tr style="mso-yfti-irow:7;mso-yfti-lastrow:yes">

<td width="316" valign="top" style="width:315.6pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black">SELECT * FROM pg_indexes WHERE tablename='__table_name__' AND schemaname='__schema_name__';</span>

</td>

<td width="230" valign="top" style="width:230.05pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
  mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;
  color:black"><span style="mso-spacerun:yes"> </span>Show table indexes</span>

</td>

</tr>

</tbody>

</table>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:18.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">Backup</span>**<span style="font-size:18.0pt;font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;
color:#4F81BD"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">pg_dump</span>**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;mso-hansi-font-family:
Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">[http://www.postgresql.org/docs/9.3/static/app-pgdump.html](http://www.postgresql.org/docs/9.3/static/app-pgdump.html)</span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">Example:</span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">pg_dump --host=ibmhpgdb1.dhcp.internetbrands.com --port=5432 --dbname=mh --username=ll4_reader --table=ll4_1.persona --data-only > "C:\_\WORK\Freelance\UpWork\rrsoft\Data\ll4_1\persona.SQL"</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">pg_restore</span>**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;mso-hansi-font-family:
Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">[http://www.postgresql.org/docs/9.3/static/app-pgrestore.html](http://www.postgresql.org/docs/9.3/static/app-pgrestore.html)</span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:18.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">SQL</span>**<span style="font-size:18.0pt;font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;
color:#4F81BD"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:14.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">UPSERT</span>**<span style="font-size:14.0pt;font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;
color:#4F81BD"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">[http://stackoverflow.com/questions/1109061/insert-on-duplicate-update-in-postgresql](http://stackoverflow.com/questions/1109061/insert-on-duplicate-update-in-postgresql)</span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:darkblue;background:#D9D9D9">UPDATE table SET</span> <span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;background:#D9D9D9">field=<span style="color:maroon">'C'</span>, field2=<span style="color:maroon">'Z'</span> <span style="color:darkblue">WHERE</span> id=<span style="color:maroon">3</span>;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:darkblue;background:#D9D9D9">INSERT INTO table</span> <span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;background:#D9D9D9">(id, field, field2)</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> <span style="color:darkblue">SELECT</span> <span style="color:maroon">3</span>, <span style="color:maroon">'C'</span>, <span style="color:maroon">'Z'</span></span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> WHERE NOT EXISTS (SELECT <span style="color:maroon">1</span> FROM table WHERE id=<span style="color:maroon">3</span>);</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:14.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">Information Schema</span>**<span style="font-size:14.0pt;font-family:Cambria;mso-bidi-font-family:
&quot;Times New Roman&quot;;color:#4F81BD"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">All columns</span>**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">SELECT * FROM information_schema.columns;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">All Tables</span>**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">SELECT * FROM information_schema.tables;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">All indexes</span>**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">SELECT</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> U.usename<span style="mso-spacerun:yes"></span> AS user_name,</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> ns.nspname<span style="mso-spacerun:yes"></span> AS schema_name,</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> idx.indrelid :: REGCLASS AS table_name,</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> i.relname<span style="mso-spacerun:yes"></span> <span style="mso-spacerun:yes">              </span>AS index_name,</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> idx.indisunique<span style="mso-spacerun:yes"></span> AS is_unique,</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> idx.indisprimary<span style="mso-spacerun:yes"></span> AS is_primary,</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> am.amname<span style="mso-spacerun:yes"></span> AS index_type,</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> idx.indkey,</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> ARRAY(</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> SELECT pg_get_indexdef(idx.indexrelid, k + 1, TRUE)</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> FROM</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> generate_subscripts(idx.indkey, 1) AS k</span><span style="font-size:
11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> ORDER BY k</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> ) AS index_keys,</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> (idx.indexprs IS NOT NULL) OR (idx.indkey::int[] @> array[0]) AS is_functional,</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> idx.indpred IS NOT NULL AS is_partial</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">FROM pg_index AS idx</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> JOIN pg_class AS i</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> ON i.oid = idx.indexrelid</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> JOIN pg_am AS am</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> ON i.relam = am.oid</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> JOIN pg_namespace AS NS ON i.relnamespace = NS.OID</span><span style="font-size:
11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> JOIN pg_user AS U ON i.relowner = U.usesysid</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">WHERE NOT nspname LIKE 'pg%'; -- Excluding system tables;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"> </span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">All Primary Keys</span>**<span style="font-size:11.0pt;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"> </span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">select</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">tc.table_schema, tc.table_name, kc.column_name, tc.constraint_type</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">from</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> information_schema.table_constraints tc</span><span style="font-size:
11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> join information_schema.key_column_usage kc on</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> kc.table_name = tc.table_name</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> and kc.constraint_name = tc.constraint_name</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes">  </span></span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">where 1=1</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">-- and tc.table_schema =<span style="mso-spacerun:yes"></span> 'account_account'</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">-- and tc.table_name =<span style="mso-spacerun:yes"></span> 'account_account'</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">and tc.constraint_type = 'PRIMARY KEY'</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> ;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"> </span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">All Foreign Keys</span>**<span style="font-size:11.0pt;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"> </span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">select</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">tc.table_schema, tc.table_name, kc.column_name, tc.constraint_type</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">from</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> information_schema.table_constraints tc</span><span style="font-size:
11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> join information_schema.key_column_usage kc on</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> kc.table_name = tc.table_name</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> and kc.constraint_name = tc.constraint_name</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes">  </span></span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">where 1=1</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">-- and tc.table_schema =<span style="mso-spacerun:yes"></span> 'account_account'</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">-- and tc.table_name =<span style="mso-spacerun:yes"></span> 'account_account'</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">and tc.constraint_type = 'FOREIGN KEY'</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> ;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">All Constraints</span>**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"> </span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">select</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">tc.table_schema, tc.table_name, kc.column_name, tc.constraint_type</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">from</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> information_schema.table_constraints tc</span><span style="font-size:
11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> join information_schema.key_column_usage kc on</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> kc.table_name = tc.table_name</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> and kc.constraint_name = tc.constraint_name</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes">  </span></span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">where 1=1</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">-- and tc.table_schema =<span style="mso-spacerun:yes"></span> 'account_account'</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">-- and tc.table_name =<span style="mso-spacerun:yes"></span> 'account_account'</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> ;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:14.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">Data Conversion</span>**<span style="font-size:14.0pt;font-family:Cambria;
mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">From String to Number</span>**<span style="font-size:11.0pt;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">CAST(nullif(data->>'retweet_count', '') AS decimal)</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:14.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">Using command line</span>**<span style="font-size:14.0pt;font-family:Cambria;
mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD"></span>

<span style="font-size:11.5pt;
font-family:Helvetica;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#222222;
background:white">This can be done by creating a </span><span style="font-size:10.0pt;font-family:Consolas;mso-bidi-font-family:&quot;Times New Roman&quot;;
color:#222222;background:#EEEEEE">.pgpass</span><span style="font-size:11.5pt;
font-family:Helvetica;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#222222;
background:white"> file in the home directory of the (Linux) User. </span><span style="font-size:10.0pt;font-family:Consolas;mso-bidi-font-family:&quot;Times New Roman&quot;;
color:#222222;background:#EEEEEE">.pgpass</span><span style="font-size:11.5pt;
font-family:Helvetica;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#222222;
background:white"> file format:</span><span style="font-size:11.0pt;
mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:
&quot;Times New Roman&quot;;color:#222222"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><databaseip>:<port>:<databasename>:<dbusername>:<password></span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">To set up the file:</span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">echo "192.168.1.1:*:*:postgres:postgrespwd" > $HOME/.pgpass</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">echo "` chmod 0600 $HOME/.pgpass `"</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"> </span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">echo " ` psql -h 192.168.1.1 -p 5432<span style="mso-spacerun:yes"></span> -U postgres<span style="mso-spacerun:yes"></span> postgres<span style="mso-spacerun:yes"></span> -f tmp.sql `<span style="mso-spacerun:yes">  </span></span><span style="font-size:
11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">psql –U admin –p myPass -d db1 -c 'SELECT * FROM db1.itevia_twitter'</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:14.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">CSV Import / Export</span>**<span style="font-size:14.0pt;font-family:Cambria;
mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">[http://www.postgresql.org/docs/9.5/static/sql-copy.html](http://www.postgresql.org/docs/9.5/static/sql-copy.html)</span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">COPY table_name [ ( column_name [, ...] ) ]</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> FROM { 'filename' | STDIN }</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> [ [ WITH ] ( option [, ...] ) ]</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"> </span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">COPY { table_name [ ( column_name [, ...] ) ] | ( query ) }</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> TO { 'filename' | STDOUT }</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> [ [ WITH ] ( option [, ...] ) ]</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"> </span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">where option can be one of:</span><span style="font-size:
11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"> </span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> FORMAT format_name</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> OIDS [ boolean ]</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> DELIMITER 'delimiter_character'</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> NULL 'null_string'</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> HEADER [ boolean ]</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> QUOTE 'quote_character'</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> ESCAPE 'escape_character'</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> FORCE_QUOTE { ( column_name [, ...] ) | * }</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> FORCE_NOT_NULL ( column_name [, ...] )</span><span style="font-size:
11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> ENCODING 'encoding_name'</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:18.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">FUNCTIONS</span>**<span style="font-size:18.0pt;font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;
color:#4F81BD"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:14.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">Median</span>**<span style="font-size:14.0pt;font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;
color:#4F81BD"></span>

**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">By Aggregate</span>**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">CREATE OR REPLACE FUNCTION array_median(numeric[])</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> RETURNS numeric AS</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">$</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> SELECT CASE WHEN array_upper($1,1) = 0 THEN null ELSE asorted[ceiling(array_upper(asorted,1)/2.0)] END</span><span style="font-size:
11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> FROM (SELECT ARRAY(SELECT ($1)[n] FROM</span><span style="font-size:
11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">generate_series(1, array_upper($1, 1)) AS n</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> WHERE ($1)[n] IS NOT NULL</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> ORDER BY ($1)[n]</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">) As asorted) As foo ;</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">$</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> LANGUAGE 'sql' IMMUTABLE;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"> </span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"> </span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">CREATE OR REPLACE FUNCTION array_median(timestamp[])</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> RETURNS timestamp AS</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">$</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> SELECT CASE WHEN array_upper($1,1) = 0 THEN null ELSE asorted[ceiling(array_upper(asorted,1)/2.0)] END</span><span style="font-size:
11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> FROM (SELECT ARRAY(SELECT ($1)[n] FROM</span><span style="font-size:
11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">generate_series(1, array_upper($1, 1)) AS n</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> WHERE ($1)[n] IS NOT NULL</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> <span style="mso-spacerun:yes">    </span>ORDER BY ($1)[n]</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">) As asorted) As foo ;</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">$</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> LANGUAGE 'sql' IMMUTABLE;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"> </span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"> </span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">CREATE AGGREGATE median(numeric) (</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> SFUNC=array_append,</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> STYPE=numeric[],</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> FINALFUNC=array_median</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">);</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"> </span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">CREATE AGGREGATE median(timestamp) (</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> SFUNC=array_append,</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> STYPE=timestamp[],</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> FINALFUNC=array_median</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">);</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"> </span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">-- To Test</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">SELECT avg(x), median(x)</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">FROM (SELECT 3 As x</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> UNION ALL</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> SELECT - 1 As x</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> UNION ALL</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> SELECT 11 As x</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> UNION ALL</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> SELECT 10 As x</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> UNION ALL</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> SELECT 9 As x) As foo;</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"> </span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;
mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:
&quot;Times New Roman&quot;"> </span>

**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">By Function</span>**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">CREATE FUNCTION _final_median(anyarray) RETURNS float8 AS $</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> WITH q AS</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> (</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> SELECT val</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> FROM unnest($1) val</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> WHERE VAL IS NOT NULL</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> ORDER BY 1</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> ),</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> cnt AS</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> (</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> SELECT COUNT(*) AS c FROM q</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> )</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> SELECT AVG(val)::float8</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> FROM</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> (</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> SELECT val FROM q</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> LIMIT<span style="mso-spacerun:yes"></span> 2 - MOD((SELECT c FROM cnt), 2)</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> OFFSET GREATEST(CEIL((SELECT c FROM cnt) / 2.0) - 1,0)<span style="mso-spacerun:yes"> </span></span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> ) q2;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">$ LANGUAGE sql IMMUTABLE;</span><span style="font-size:
11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"> </span></span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">CREATE AGGREGATE median(anyelement) (</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> SFUNC=array_append,</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> STYPE=anyarray,</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> FINALFUNC=_final_median,</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> INITCOND='{}'</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">);</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:14.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">Example</span>**<span style="font-size:14.0pt;font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;
color:#4F81BD"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">CREATE OR REPLACE FUNCTION "cs"."add_event" (p_event_type character varying, p_trigger_url_host character varying, p_trigger_url_domain character varying, p_trigger_url_path character varying, p_trigger_url_query character varying, p_referrer_url_host character varying, p_referrer_url_domain character varying, p_referrer_url_path character varying, p_referrer_url_query character varying, p_user_agent character varying, p_client_ip character varying, p_session_id numeric, p_local_user_id numeric, p_global_user_id numeric, p_time_stamp numeric, p_event_params character varying[])<span style="mso-spacerun:yes"></span> RETURNS integer</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> VOLATILE</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">AS $dbvis$</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">declare</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> retval_id integer;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_event_type_id integer;</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_trigger_url_host_id integer;</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_trigger_url_domain_id integer;</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_trigger_url_path_id integer;</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_trigger_url_query_id integer;</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_referrer_url_host_id integer;</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_referrer_url_domain_id integer;</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_referrer_url_path_id integer;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_referrer_url_query_id integer;</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_user_agent_id integer;</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_client_ip_id integer;</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_input_params_size integer;</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_event_param_id_array integer[];</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_param character varying[];</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> dim1 int;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> dim2 int;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">begin</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_event_type_id = cs.get_event_type_id_from_name(p_event_type);</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_trigger_url_host_id = cs.get_host_id_from_name(p_trigger_url_host);</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_trigger_url_domain_id = cs.get_domain_id_from_name(p_trigger_url_domain);</span><span style="font-size:
11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_trigger_url_path_id = cs.get_path_id_from_name(p_trigger_url_query);</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_trigger_url_query_id = cs.get_query_string_id_from_name(p_trigger_url_query);</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> if p_referrer_url_host IS NOT NULL then</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_referrer_url_host_id = cs.get_host_id_from_name(p_referrer_url_host);</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> end if;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> if p_referrer_url_domain IS NOT NULL then</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_referrer_url_domain_id = cs.get_domain_id_from_name(p_referrer_url_domain);</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> end if;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> if p_referrer_url_path IS NOT NULL then</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_referrer_url_path_id = cs.get_path_id_from_name(p_referrer_url_query);</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> end if;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> if p_referrer_url_query IS NOT NULL then</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_referrer_url_query_id = cs.get_query_string_id_from_name(p_referrer_url_query);</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> end if;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes">       </span></span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_user_agent_id = cs.get_user_agent_id_from_name(p_user_agent);</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_client_ip_id = cs.get_client_ip_id_from_name(p_client_ip);</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes">       </span></span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> select array_length(p_event_params, 1) into v_input_params_size;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> if v_input_params_size is null then</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_input_params_size := 0;</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> end if;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> FOR i in 1..v_input_params_size BY 2 LOOP</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_event_param_id_array[i] := cs.get_attribute_name_id_from_name(p_event_params[i]);</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_event_param_id_array[i+1] := cs.get_attribute_value_id_from_value(p_event_params[i+1]);</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> END LOOP;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes">       </span></span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> retval_id = cs.add_normalized_event</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> (</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_event_type_id,</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> <span style="mso-spacerun:yes">    </span>v_trigger_url_host_id,</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_trigger_url_domain_id,</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_trigger_url_path_id,</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_trigger_url_query_id,</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_referrer_url_host_id,</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_referrer_url_domain_id,</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_referrer_url_path_id,</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_referrer_url_query_id,</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_user_agent_id,</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_client_ip_id,</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> p_session_id,</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> <span style="mso-spacerun:yes">          </span>p_local_user_id,</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> p_global_user_id,</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> p_time_stamp,</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> v_event_param_id_array</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> );</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"> </span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> return retval_id;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">exception</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"> </span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> when plpgsql_error then</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> return -2;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"> </span><span style="mso-spacerun:yes"></span> when unique_violation then</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> return -3;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">end;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">$dbvis$ LANGUAGE plpgsql</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:14.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">Return Array</span>**<span style="font-size:14.0pt;font-family:Cambria;mso-bidi-font-family:
&quot;Times New Roman&quot;;color:#4F81BD"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">DROP FUNCTION IF EXISTS get_report_event_type_ids2(report_name VARCHAR(100)) ;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">CREATE OR REPLACE FUNCTION get_report_event_type_ids2(report_name varchar(100)) RETURNS integer[] AS</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">$BODY$</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">DECLARE</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> b integer[];</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">BEGIN</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> b = ARRAY[1,2,56,3141];</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9"><span style="mso-spacerun:yes"></span> RETURN b;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">END;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
background:#D9D9D9">$BODY$ LANGUAGE 'plpgsql' VOLATILE;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:18.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">JSON</span>**<span style="font-size:18.0pt;font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;
color:#4F81BD"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">[http://clarkdave.net/2013/06/what-can-you-do-with-postgresql-and-json/](http://clarkdave.net/2013/06/what-can-you-do-with-postgresql-and-json/)</span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">[http://www.postgresql.org/docs/9.3/static/functions-json.html](http://www.postgresql.org/docs/9.3/static/functions-json.html)</span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<table class="MsoNormalTable" border="1" cellspacing="0" cellpadding="0" title="" summary="" style="border-collapse:collapse;border:none;mso-border-alt:solid #A3A3A3 1.0pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0in 0in 0in 0in">

<tbody>

<tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">

<td width="118" valign="top" style="width:117.8pt;border:solid #A3A3A3 1.0pt;
  background:#E0ECEF;padding:4.0pt 4.0pt 4.0pt 4.0pt">

**<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;">Function</span>**<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;"></span>

</td>

<td width="65" valign="top" style="width:65.1pt;border:solid #A3A3A3 1.0pt;
  border-left:none;mso-border-left-alt:solid #A3A3A3 1.0pt;background:#E0ECEF;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

**<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;">Return Type</span>**<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;"></span>

</td>

<td width="220" valign="top" style="width:219.8pt;border:solid #A3A3A3 1.0pt;
  border-left:none;mso-border-left-alt:solid #A3A3A3 1.0pt;background:#E0ECEF;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

**<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;">Description</span>**<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;"></span>

</td>

<td width="110" valign="top" style="width:110.25pt;border:solid #A3A3A3 1.0pt;
  border-left:none;mso-border-left-alt:solid #A3A3A3 1.0pt;background:#E0ECEF;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

**<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;">Example</span>**<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;"></span>

</td>

<td width="50" valign="top" style="width:50.05pt;border:solid #A3A3A3 1.0pt;
  border-left:none;mso-border-left-alt:solid #A3A3A3 1.0pt;background:#E0ECEF;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

**<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;">Example Result</span>**<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;"></span>

</td>

</tr>

<tr style="mso-yfti-irow:1">

<td width="119" valign="top" style="width:119.25pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;background:white;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">array_to_json(anyarray [, pretty_bool])</span>

</td>

<td width="64" valign="top" style="width:64.1pt;border-top:none;border-left:none;
  border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">json</span>

</td>

<td width="221" valign="top" style="width:221.2pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;">Returns the array as JSON. A PostgreSQL multidimensional array becomes a JSON array of arrays. Line feeds will be added between dimension 1 elements if </span><span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">pretty_bool</span><span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;"> is true.</span>

</td>

<td width="112" valign="top" style="width:1.55in;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">array_to_json('{{1,5},{99,100}}'::int[])</span>

</td>

<td width="54" valign="top" style="width:54.35pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">[[1,5],[99,100]]</span>

</td>

</tr>

<tr style="mso-yfti-irow:2">

<td width="118" valign="top" style="width:118.0pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;background:white;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">row_to_json(record [, pretty_bool])</span>

</td>

<td width="64" valign="top" style="width:64.1pt;border-top:none;border-left:none;
  border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">json</span>

</td>

<td width="220" valign="top" style="width:219.8pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;">Returns the row as JSON. Line feeds will be added between level 1 elements if </span><span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">pretty_bool</span><span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;"> is true.</span>

</td>

<td width="112" valign="top" style="width:1.55in;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">row_to_json(row(1,'foo'))</span>

</td>

<td width="54" valign="top" style="width:54.35pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">{"f1":1,"f2":"foo"}</span>

</td>

</tr>

<tr style="mso-yfti-irow:3">

<td width="118" valign="top" style="width:117.8pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;background:white;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">to_json(anyelement)</span>

</td>

<td width="64" valign="top" style="width:64.1pt;border-top:none;border-left:none;
  border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">json</span>

</td>

<td width="221" valign="top" style="width:221.2pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;">Returns the value as JSON. If the data type is not built in, and there is a cast from the type to </span><span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">json</span><span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;">, the cast function will be used to perform the conversion. Otherwise, for any value other than a number, a Boolean, or a null value, the text representation will be used, escaped and quoted so that it is legal JSON.</span>

</td>

<td width="110" valign="top" style="width:110.25pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">to_json('Fred said "Hi."'::text)</span>

</td>

<td width="50" valign="top" style="width:49.55pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">"Fred said \"Hi.\""</span>

</td>

</tr>

<tr style="mso-yfti-irow:4">

<td width="119" valign="top" style="width:119.25pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;background:white;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">json_array_length(json)</span>

</td>

<td width="64" valign="top" style="width:64.1pt;border-top:none;border-left:none;
  border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">int</span>

</td>

<td width="220" valign="top" style="width:219.8pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;">Returns the number of elements in the outermost JSON array.</span>

</td>

<td width="112" valign="top" style="width:1.55in;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">json_array_length('[1,2,3,{"f1":1,"f2":[5,6]},4]')</span>

</td>

<td width="45" valign="top" style="width:44.5pt;border-top:none;border-left:none;
  border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">5</span>

</td>

</tr>

<tr style="mso-yfti-irow:5">

<td width="118" valign="top" style="width:117.8pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;background:white;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">json_each(json)</span>

</td>

<td width="65" valign="top" style="width:65.15pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">SETOF key text, value json</span>

</td>

<td width="220" valign="top" style="width:219.8pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;">Expands the outermost JSON object into a set of key/value pairs.</span>

</td>

<td width="112" valign="top" style="width:1.55in;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">select * from json_each('{"a":"foo", "b":"bar"}')</span>

</td>

<td width="54" valign="top" style="width:54.35pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7"><span style="mso-spacerun:yes"> </span>key | value</span><span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7">-----+-------</span><span style="font-size:
  8.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7"><span style="mso-spacerun:yes"> </span>a<span style="mso-spacerun:yes"></span> | "foo"</span><span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7"><span style="mso-spacerun:yes"> </span>b<span style="mso-spacerun:yes"></span> | "bar"</span><span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7"><span style="mso-spacerun:yes"> </span></span><span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

</td>

</tr>

<tr style="mso-yfti-irow:6">

<td width="119" valign="top" style="width:119.25pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;background:white;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">json_each_text(from_json json)</span>

</td>

<td width="65" valign="top" style="width:65.15pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">SETOF key text, value text</span>

</td>

<td width="220" valign="top" style="width:219.8pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;">Expands the outermost JSON object into a set of key/value pairs. The returned value will be of type text.</span>

</td>

<td width="112" valign="top" style="width:1.55in;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">select * from json_each_text('{"a":"foo", "b":"bar"}')</span>

</td>

<td width="54" valign="top" style="width:54.35pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7"><span style="mso-spacerun:yes"> </span>key | value</span><span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7">-----+-------</span><span style="font-size:
  8.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7"><span style="mso-spacerun:yes"> </span>a<span style="mso-spacerun:yes"></span> | foo</span><span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7"><span style="mso-spacerun:yes"> </span>b<span style="mso-spacerun:yes"></span> | bar</span><span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7"><span style="mso-spacerun:yes"> </span></span><span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

</td>

</tr>

<tr style="mso-yfti-irow:7">

<td width="119" valign="top" style="width:119.25pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;background:white;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">json_extract_path(from_json json, VARIADIC path_elems text[])</span>

</td>

<td width="64" valign="top" style="width:64.1pt;border-top:none;border-left:none;
  border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">json</span>

</td>

<td width="220" valign="top" style="width:219.8pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;">Returns JSON object pointed to by </span><span style="font-size:8.0pt;
  font-family:&quot;Courier New&quot;">path_elems</span><span style="font-size:8.0pt;
  font-family:&quot;Times New Roman&quot;">.</span>

</td>

<td width="112" valign="top" style="width:1.55in;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">json_extract_path('{"f2":{"f3":1},"f4":{"f5":99,"f6":"foo"}}','f4')</span>

</td>

<td width="54" valign="top" style="width:54.35pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">{"f5":99,"f6":"foo"}</span>

</td>

</tr>

<tr style="mso-yfti-irow:8">

<td width="119" valign="top" style="width:119.25pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;background:white;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">json_extract_path_text(from_json json, VARIADIC path_elems text[])</span>

</td>

<td width="64" valign="top" style="width:64.1pt;border-top:none;border-left:none;
  border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">text</span>

</td>

<td width="220" valign="top" style="width:219.8pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;">Returns JSON object pointed to by </span><span style="font-size:8.0pt;
  font-family:&quot;Courier New&quot;">path_elems</span><span style="font-size:8.0pt;
  font-family:&quot;Times New Roman&quot;">.</span>

</td>

<td width="112" valign="top" style="width:1.55in;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">json_extract_path_text('{"f2":{"f3":1},"f4":{"f5":99,"f6":"foo"}}','f4', 'f6')</span>

</td>

<td width="48" valign="top" style="width:47.5pt;border-top:none;border-left:none;
  border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">foo</span>

</td>

</tr>

<tr style="mso-yfti-irow:9">

<td width="119" valign="top" style="width:119.25pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;background:white;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">json_object_keys(json)</span>

</td>

<td width="65" valign="top" style="width:65.15pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">SETOF text</span>

</td>

<td width="220" valign="top" style="width:219.8pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;">Returns set of keys in the JSON object. Only the "outer" object will be displayed.</span>

</td>

<td width="112" valign="top" style="width:1.55in;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">json_object_keys('{"f1":"abc","f2":{"f3":"a", "f4":"b"}}')</span>

</td>

<td width="54" valign="top" style="width:54.35pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7"><span style="mso-spacerun:yes"> </span>json_object_keys</span><span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7">------------------</span><span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7"><span style="mso-spacerun:yes"> </span>f1</span><span style="font-size:8.0pt;
  font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7"><span style="mso-spacerun:yes"> </span>f2</span><span style="font-size:8.0pt;
  font-family:&quot;Courier New&quot;;color:black"></span>

</td>

</tr>

<tr style="mso-yfti-irow:10">

<td width="119" valign="top" style="width:119.25pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;background:white;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">json_populate_record(base anyelement, from_json json, [, use_json_as_text bool=false]</span>

</td>

<td width="65" valign="top" style="width:65.15pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">anyelement</span>

</td>

<td width="220" valign="top" style="width:219.8pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;">Expands the object in </span>_<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">from_json</span>_<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;"> to a row whose columns match the record type defined by base. Conversion will be best effort; columns in base with no corresponding key in </span>_<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">from_json</span>_<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;"> will be left null. If a column is specified more than once, the last value is used.</span>

</td>

<td width="112" valign="top" style="width:1.55in;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">select * from json_populate_record(null::x, '{"a":1,"b":2}')</span>

</td>

<td width="48" valign="top" style="width:47.5pt;border-top:none;border-left:none;
  border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7"><span style="mso-spacerun:yes"> </span>a | b</span><span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7">---+---</span><span style="font-size:8.0pt;
  font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7"><span style="mso-spacerun:yes"> </span>1 | 2</span><span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

</td>

</tr>

<tr style="mso-yfti-irow:11">

<td width="119" valign="top" style="width:119.25pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;background:white;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">json_populate_recordset(base anyelement, from_json json, [, use_json_as_text bool=false]</span>

</td>

<td width="65" valign="top" style="width:65.15pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">SETOF anyelement</span>

</td>

<td width="221" valign="top" style="width:221.2pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;">Expands the outermost set of objects in </span>_<span style="font-size:8.0pt;
  font-family:&quot;Courier New&quot;">from_json</span>_<span style="font-size:8.0pt;
  font-family:&quot;Times New Roman&quot;"> to a set whose columns match the record type defined by base. Conversion will be best effort; columns in base with no corresponding key in </span>_<span style="font-size:8.0pt;font-family:
  &quot;Courier New&quot;">from_json</span>_<span style="font-size:8.0pt;font-family:
  &quot;Times New Roman&quot;"> will be left null. If a column is specified more than once, the last value is used.</span>

</td>

<td width="112" valign="top" style="width:1.55in;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">select * from json_populate_recordset(null::x, '[{"a":1,"b":2},{"a":3,"b":4}]')</span>

</td>

<td width="48" valign="top" style="width:47.5pt;border-top:none;border-left:none;
  border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7"><span style="mso-spacerun:yes"> </span>a | b</span><span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7">---+---</span><span style="font-size:8.0pt;
  font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7"><span style="mso-spacerun:yes"> </span>1 | 2</span><span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7"><span style="mso-spacerun:yes"> </span>3 | 4</span><span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7"><span style="mso-spacerun:yes"> </span></span><span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

</td>

</tr>

<tr style="mso-yfti-irow:12;mso-yfti-lastrow:yes">

<td width="119" valign="top" style="width:119.25pt;border:solid #A3A3A3 1.0pt;
  border-top:none;mso-border-top-alt:solid #A3A3A3 1.0pt;background:white;
  padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">json_array_elements(json)</span>

</td>

<td width="65" valign="top" style="width:65.15pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">SETOF json</span>

</td>

<td width="220" valign="top" style="width:219.8pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Times New Roman&quot;">Expands a JSON array to a set of JSON elements.</span>

</td>

<td width="112" valign="top" style="width:1.55in;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;">json_array_elements('[1,true, [2,false]]')</span>

</td>

<td width="54" valign="top" style="width:54.35pt;border-top:none;border-left:
  none;border-bottom:solid #A3A3A3 1.0pt;border-right:solid #A3A3A3 1.0pt;
  mso-border-top-alt:solid #A3A3A3 1.0pt;mso-border-left-alt:solid #A3A3A3 1.0pt;
  background:white;padding:4.0pt 4.0pt 4.0pt 4.0pt">

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7"><span style="mso-spacerun:yes"></span> value</span><span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black"></span>

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7">-----------</span><span style="font-size:
  8.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7"><span style="mso-spacerun:yes"> </span>1</span><span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7"><span style="mso-spacerun:yes"> </span>true</span><span style="font-size:8.0pt;
  font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:8.0pt;font-family:&quot;Courier New&quot;;
  color:black;background:#F7F7F7"><span style="mso-spacerun:yes"> </span>[2,false]</span><span style="font-size:
  8.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

</td>

</tr>

</tbody>

</table>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:18.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">Access & Security</span>**<span style="font-size:18.0pt;font-family:Cambria;
mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:14.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">Initial Access</span>**<span style="font-size:14.0pt;font-family:Cambria;mso-bidi-font-family:
&quot;Times New Roman&quot;;color:#4F81BD"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:black;background:#EEECE1"># su - postgres</span><span style="font-size:
11.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:black;background:#EEECE1">$ psql</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:black;background:#EEECE1">postgres=# CREATE USER mypguser WITH PASSWORD 'mypguserpass';</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:black;background:#EEECE1">postgres=# CREATE DATABASE mypgdatabase OWNER mypguser;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:black"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:14.0pt;
font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;color:#4F81BD">Users</span>**<span style="font-size:14.0pt;font-family:Cambria;mso-bidi-font-family:&quot;Times New Roman&quot;;
color:#4F81BD"></span>

**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">Show all Users:</span>**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:black;background:#EEECE1">SELECT u.usename AS "User name",</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:black;background:#EEECE1"><span style="mso-spacerun:yes"></span> u.usesysid AS "User ID",</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:black;background:#EEECE1"><span style="mso-spacerun:yes"></span> CASE WHEN u.usesuper AND u.usecreatedb THEN CAST('superuser, create</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:black;background:#EEECE1">database' AS pg_catalog.text)</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:black;background:#EEECE1"><span style="mso-spacerun:yes"></span> WHEN u.usesuper THEN CAST('superuser' AS pg_catalog.text)</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:black;background:#EEECE1"><span style="mso-spacerun:yes"></span> WHEN u.usecreatedb THEN CAST('create database' AS</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:black;background:#EEECE1">pg_catalog.text)</span><span style="font-size:
11.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:black;background:#EEECE1"><span style="mso-spacerun:yes"></span> ELSE CAST('' AS pg_catalog.text)</span><span style="font-size:11.0pt;font-family:
&quot;Courier New&quot;;color:black"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:black;background:#EEECE1"><span style="mso-spacerun:yes"></span> END AS "Attributes"</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:black;background:#EEECE1">FROM pg_catalog.pg_user u</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:black;background:#EEECE1">ORDER BY 1;</span><span style="font-size:11.0pt;
font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:11.0pt;
mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:
&quot;Times New Roman&quot;"> </span>

**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">Create User:</span>**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:black;background:#EEECE1">CREATE USER mypguser WITH PASSWORD 'mypguserpass';</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:black"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">Make user SUPERUSER:</span>**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:black;background:#EEECE1">ALTER USER admin WITH SUPERUSER;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">Making User a database owner:</span>**<span style="font-size:11.0pt;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:black;background:#EEECE1">CREATE DATABASE db1 OWNER admin;</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;color:black"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

**<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;">Change user Password</span>**<span style="font-size:11.0pt;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"></span>

<span style="font-size:11.0pt;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;"> </span>

<span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:black;background:#EEECE1">ALTER USER postgres with password 'new-password';</span><span style="font-size:11.0pt;font-family:&quot;Courier New&quot;;
color:black"></span>

</div>