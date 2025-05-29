---
title: -terminal
layout: yo
---
> Related Pages: [bash](bash.md), [commandPrompt](commandPrompt.md), [powershell](powershell.md)


# packet managers
- winget
- chocolatey
- scoop
- ninite
- pacman (MSYS2)
- cargo (rust)



# $variables
Basically `$variable` is a variable you can use in terminal like:

` $varible = "value" `
There are also pre-set values like 

| Name                           | description                                | value                                                                          |
| ------------------------------ | ------------------------------------------ | ------------------------------------------------------------------------------ |
| `$PROFILE`                     | the script that runs when Powerhell starts | C:\Users\USERNAME\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1 |
| `$HOME` and `$env:USERPROFILE` | home directory of user                     | C:\Users\USERNAME                                                              |
| `$env:USERNAME`                | username                                   |                                                                                |
| `$DATE`                        | date (placeholder varible)                 |                                                                                |
| `$TIME`                        | time (placeholder varible)                 |                                                                                |


Also the `$env:` represent a environment variable which basically means it works outside PowerShell too at "the OS level."



# My Table

## dash things


| full name | short |
| --------- | ----- |
| -Force    | -f    |
| -Recurse  | -r    |
|           |       |


## General files & folders


| Command (pwsh)  | Alias (cmd)     | Syntax                                | Description                                     |
| --------------- | --------------- | ------------------------------------- | ----------------------------------------------- |
|                 | echo            |                                       |                                                 |
|                 | h               |                                       |                                                 |
| `Get-ChildItem` | dir, ls, gci    |                                       |                                                 |
| `Set-Location`  | cd, sl          |                                       |                                                 |
|                 |                 |                                       |                                                 |
| `New-Item`      | `ni`            |                                       |                                                 |
| `Move-Item`     | `mv`, `move`    |                                       |                                                 |
| `Remove-Item`   | `rm`, `rmdir`   |                                       |                                                 |
|                 | `md`, `mkdir`   |                                       |                                                 |
| `Rename-Item`   | ren             | `ren {oldName} {newName}`             |                                                 |
| `Copy-Item`     | cp, copy        | `cp/copy {file/folder} {newFileName}` |                                                 |
|                 |                 |                                       |                                                 |
| `Set-Content`   | sc              | `sc {file} {string}`                  | Sets the contents of the file to the `(string)` |
| `Get-Content`   | type, cat       | `type/cat {file}`                     | A basic way to view the inside of a file        |
| `Clear-Content` | clc             | `clc {file}`                          | Clears the content of the file.                 |
|                 |                 |                                       |                                                 |
| `Start-Process` | `start`, `saps` |                                       |                                                 |
| `Get-Process`   | gps             |                                       |                                                 |
| `Stop-Process`  | spps, kill      |                                       |                                                 |
|                 |                 |                                       |                                                 |
|                 |                 |                                       |                                                 |


# All Get-Alias Table 

| Alias (cmd) | Command (pwsh)                 |
| ----------- | ------------------------------ |
| %           | ForEach-Object                 |
| ?           | Where-Object                   |
| ac          | Add-Content                    |
| asnp        | Add-PSSnapin                   |
| cat         | Get-Content                    |
| cd          | Set-Location                   |
| CFS         | ConvertFrom-String             |
| chdir       | Set-Location                   |
| clc         | Clear-Content                  |
| clear       | Clear-Host                     |
| clhy        | Clear-History                  |
| cli         | Clear-Item                     |
| clp         | Clear-ItemProperty             |
| cls         | Clear-Host                     |
| clv         | Clear-Variable                 |
| cnsn        | Connect-PSSession              |
| compare     | Compare-Object                 |
| copy        | Copy-Item                      |
| cp          | Copy-Item                      |
| cpi         | Copy-Item                      |
| cpp         | Copy-ItemProperty              |
| curl        | Invoke-WebRequest              |
| cvpa        | Convert-Path                   |
| dbp         | Disable-PSBreakpoint           |
| del         | Remove-Item                    |
| diff        | Compare-Object                 |
| dir         | Get-ChildItem                  |
| dnsn        | Disconnect-PSSession           |
| ebp         | Enable-PSBreakpoint            |
| echo        | Write-Output                   |
| epal        | Export-Alias                   |
| epcsv       | Export-Csv                     |
| epsn        | Export-PSSession               |
| erase       | Remove-Item                    |
| etsn        | Enter-PSSession                |
| exsn        | Exit-PSSession                 |
| fc          | Format-Custom                  |
| fhx         | Format-Hex                     |
| fl          | Format-List                    |
| foreach     | ForEach-Object                 |
| ft          | Format-Table                   |
| fw          | Format-Wide                    |
| gal         | Get-Alias                      |
| gbp         | Get-PSBreakpoint               |
| gc          | Get-Content                    |
| gcb         | Get-Clipboard                  |
| gci         | Get-ChildItem                  |
| gcm         | Get-Command                    |
| gcs         | Get-PSCallStack                |
| gdr         | Get-PSDrive                    |
| ghy         | Get-History                    |
| gi          | Get-Item                       |
| gin         | Get-ComputerInfo               |
| gjb         | Get-Job                        |
| gl          | Get-Location                   |
| gm          | Get-Member                     |
| gmo         | Get-Module                     |
| gp          | Get-ItemProperty               |
| gps         | Get-Process                    |
| gpv         | Get-ItemPropertyValue          |
| group       | Group-Object                   |
| gsn         | Get-PSSession                  |
| gsnp        | Get-PSSnapin                   |
| gsv         | Get-Service                    |
| gtz         | Get-TimeZone                   |
| gu          | Get-Unique                     |
| gv          | Get-Variable                   |
| gwmi        | Get-WmiObject                  |
| h           | Get-History                    |
| history     | Get-History                    |
| icm         | Invoke-Command                 |
| iex         | Invoke-Expression              |
| ihy         | Invoke-History                 |
| ii          | Invoke-Item                    |
| ipal        | Import-Alias                   |
| ipcsv       | Import-Csv                     |
| ipmo        | Import-Module                  |
| ipsn        | Import-PSSession               |
| irm         | Invoke-RestMethod              |
| ise         | powershell_ise.exe             |
| iwmi        | Invoke-WmiMethod               |
| iwr         | Invoke-WebRequest              |
| kill        | Stop-Process                   |
| lp          | Out-Printer                    |
| ls          | Get-ChildItem                  |
| man         | help                           |
| md          | mkdir                          |
| measure     | Measure-Object                 |
| mi          | Move-Item                      |
| mount       | New-PSDrive                    |
| move        | Move-Item                      |
| mp          | Move-ItemProperty              |
| mv          | Move-Item                      |
| nal         | New-Alias                      |
| ndr         | New-PSDrive                    |
| ni          | New-Item                       |
| nmo         | New-Module                     |
| npssc       | New-PSSessionConfigurationFile |
| nsn         | New-PSSession                  |
| nv          | New-Variable                   |
| ogv         | Out-GridView                   |
| oh          | Out-Host                       |
| popd        | Pop-Location                   |
| ps          | Get-Process                    |
| pushd       | Push-Location                  |
| pwd         | Get-Location                   |
| r           | Invoke-History                 |
| rbp         | Remove-PSBreakpoint            |
| rcjb        | Receive-Job                    |
| rcsn        | Receive-PSSession              |
| rd          | Remove-Item                    |
| rdr         | Remove-PSDrive                 |
| refreshenv  | Update-SessionEnvironment      |
| ren         | Rename-Item                    |
| ri          | Remove-Item                    |
| rjb         | Remove-Job                     |
| rm          | Remove-Item                    |
| rmdir       | Remove-Item                    |
| rmo         | Remove-Module                  |
| rni         | Rename-Item                    |
| rnp         | Rename-ItemProperty            |
| rp          | Remove-ItemProperty            |
| rsn         | Remove-PSSession               |
| rsnp        | Remove-PSSnapin                |
| rujb        | Resume-Job                     |
| rv          | Remove-Variable                |
| rvpa        | Resolve-Path                   |
| rwmi        | Remove-WmiObject               |
| sajb        | Start-Job                      |
| sal         | Set-Alias                      |
| saps        | Start-Process                  |
| sasv        | Start-Service                  |
| sbp         | Set-PSBreakpoint               |
| sc          | Set-Content                    |
| scb         | Set-Clipboard                  |
| select      | Select-Object                  |
| set         | Set-Variable                   |
| shcm        | Show-Command                   |
| si          | Set-Item                       |
| sl          | Set-Location                   |
| sleep       | Start-Sleep                    |
| sls         | Select-String                  |
| sort        | Sort-Object                    |
| sp          | Set-ItemProperty               |
| spjb        | Stop-Job                       |
| spps        | Stop-Process                   |
| spsv        | Stop-Service                   |
| start       | Start-Process                  |
| stz         | Set-TimeZone                   |
| sujb        | Suspend-Job                    |
| sv          | Set-Variable                   |
| swmi        | Set-WmiInstance                |
| tee         | Tee-Object                     |
| trcm        | Trace-Command                  |
| type        | Get-Content                    |
| wget        | Invoke-WebRequest              |
| where       | Where-Object                   |
| wjb         | Wait-Job                       |
| write       | Write-Output                   |

# commands

## `Get-ChildItem`, `dir`, `ls`, `gci`


| attribute | description           |
| --------- | --------------------- |
| `d-----`  | directory             |
| `r-----`  | read only             |
| `-a----`  | archive (normal) file |
| `--s---`  | system file           |
| `---h--`  | hidden file           |

