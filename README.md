# webpack-es6-pug-scss
> Traditional website boilerplate with ES6, Pug, SCSS.
>
> Bundled by Webpack.


---


### **Install**
```cmd
yarn
```

### **Dev**
```cmd
yarn dev
```

### **Production**
```cmd
yarn build
```

### **Folder Note**
* /dist
  * 開發用資料夾
* /out
  * 發行用資料夾
* /src
  * 專案原始檔
* /src/assets
  * 儲存專案中會使用或經過編譯的資產(css, img, js, font)
* /src/public
  * 儲存專案中的所有靜態檔案, 會發行於根目錄
* /src/views
  * Pug 與其相關設定
* /src/views/pages
  * 對應編譯成 html 於根目錄
  * 只有 pages 內的 pug 會編譯
* /webpack/config/base.js
  * 設定 dev 或 prod 的 baseURL
  * 如果預計部署於根目錄 `prod` 設定 `""`
  * 如果預計部署指定路徑 `prod` 設定 `"/target_url"`
