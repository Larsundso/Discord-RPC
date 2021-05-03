@echo off
title Presence
:start
    node "index.js"
    timeout /t 0 /nobreak
goto start
exit