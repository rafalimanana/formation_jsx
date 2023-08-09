symfony composer install
CMD /C "yarn install"
CMD /C "yarn encore dev"
CMD /c "symfony server:stop"
CMD /C "symfony serve --port=8090"
firefox https://127.0.0.1:8090/test