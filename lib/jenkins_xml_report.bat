powershell -Command "(gc target/cucumber_report.xml) -replace '<testsuites>', '<testsuites name=~UIBDD.Driver~>' | Out-File -encoding ASCII target/cucumber_report_temp.xml"
powershell -Command "(gc target/cucumber_report_temp.xml) -replace '~', '\""' | Out-File -encoding ASCII cucumber_report_final.xml"