# Bevy API 使用指南 | Bevy API User Guideline

---

## Bevy 介紹 | Bevy Introduction

> Google Developers Platform 使用 Bevy 所提供的社群管理平台打造，因此我們可以透過原生系統提供的API輕易獲取活動資訊。
  不過，受限於我們的身份 (GDG / GDSC)。
  基本上可以使用的只有「讀取活動」的API權限，其餘都會被拒絕存取。

---

## API 表 | API Table

| | 網站路由 | API 路由 |
|---|------|:--|
|GDG|https://gdg.community.dev| https://gdg.community.dev/api|
|GDSC|https://gdsc.community.dev| https://gdsc.community.dev/api|

---

## 開始上手 | Getting Start

### 取得你的 Chapter ID | Get your Chapter ID

#### 方法一 |　Method. 1　

登入至 Bevy 後臺系統，從網址中取得社群對應 Chapter ID

https://gdg.community.dev/accounts/dashboard/#/chapter-<chapter_id>/analytics/overview

或

https://gdsc.community.dev/accounts/dashboard/#/chapter-<chapter_id>/analytics/overview

#### 方法二 | Method. 2

透過API查詢你的社團名稱，即可找到 Chapter ID

https://gdg.community.dev/api/search/chapter?q=<your-chapter-name>

或

https://gdsc.community.dev/api/search/chapter?q=<your-chapter-name>

#### 範例 | Example

Input：
> https://gdg.community.dev/api/search/chapter/?q=GDG Taipei
Output:
> results["id"] 就是 Chapter ID
```json
{
    "results"
    :[
        {
            "id": 748, 
            "title": "GDG Taipei",
            "city": "Taipei",
            "state": "",
            "chapter_location": "Taipei (TW)",
            "country": "Taiwan",
        }
    ]
};
```

### API 清單 | API List

| API Route                        | 功能                    | 是否需要登入權限 |
|----------------------------------|-----------------------|----------|
| /api/chapter_region              | 取得該地區所有 Chapter 的資料   | No       |
| /api/chapter/<chapter_id>        | 取得該 Chapter 的資料       | No       |
| /api/chapter/<chapter_id>/team   | 取得該 Chapter 的所有幹部成員資料 | Yes      |
| /api/chapter/<chapter_id>/member | 取得該 Chapter 的所有成員資料   | Yes      |
| /api/chapter/<chapter_id>/event  | 取得該 Chapter 的所有活動資料   | No       |
| /api/event/                      | 取得該所有活動的資料            | No       |
| /api/event/<event_id>            | 取得該活動的資料              | No       |
| /api/event_type                  | 取得所有活動類型資料            | No       |
| /api/event/tag                   | 取得所有活動標籤資料            | No       |
| /api/search/event/               | 搜尋活動資料                | No       |
| /api/search/chapter/             | 搜尋 Chapter 資料         | No       |

#### Chapter API 回傳資料格式

> https://gdsc.community.dev/api/chapter/3153

```json
{
  "chapter_location": "Douliu City (TW)",
  "chapter_photos": [
    
  ],
  "city": "Douliu City",
  "country": "TW",
  "country_name": "Taiwan",
  "created": "2022-09-05T14:23:59Z",
  "cropped_banner_url": "https://res.cloudinary.com/startup-grind/image/fetch/c_scale,w_2560/c_crop,h_650,w_2560,y_0.45_mul_h_sub_0.45_mul_650/c_crop,h_650,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/https://res.cloudinary.com/startup-grind/image/upload/c_fill%2Cdpr_2.0%2Cf_auto%2Cg_center%2Cq_auto:good/v1/gcs/platform-data-dsc/chapter_banners/IMG_9990.jpg",
  "description": "<p>NYUST Laboratory</p>",
  "facebook_page": null,
  "flickr_page": null,
  "id": 3153,
  "instagram_handle": null,
  "is_city": false,
  "hide_country_info": false,
  "latitude": null,
  "linkedin_page": null,
  "logo": {
    "url": "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/chapter_banners/LOGO_hmZvgMt.png",
    "path": "chapter_banners/LOGO_hmZvgMt.png",
    "thumbnail_width": 400,
    "thumbnail_height": 400,
    "thumbnail_format": "auto",
    "thumbnail_url": "https://res.cloudinary.com/startup-grind/image/upload/c_fit,dpr_2,f_auto,g_center,h_400,q_auto:good,w_400/v1/gcs/platform-data-dsc/chapter_banners/LOGO_hmZvgMt.png"
  },
  "longitude": null,
  "picture": {
    "url": "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/chapter_banners/IMG_9990.jpg",
    "path": "chapter_banners/IMG_9990.jpg",
    "thumbnail_width": 1280,
    "thumbnail_height": 720,
    "thumbnail_format": "auto",
    "thumbnail_url": "https://res.cloudinary.com/startup-grind/image/upload/c_fit,dpr_2,f_auto,g_center,h_720,q_auto:good,w_1280/v1/gcs/platform-data-dsc/chapter_banners/IMG_9990.jpg"
  },
  "region": "Asia",
  "state": "",
  "status": 2,
  "title": "National Yunlin University of Science and Technology",
  "twitter_handle": null,
  "relative_url": "/national-yunlin-university-of-science-and-technology/",
  "url": "https://gdsc.community.dev/national-yunlin-university-of-science-and-technology/",
  "website": "",
  "members_count": 79
}
```

#### Event API 回傳資料

> https://gdsc.community.dev/api/chapter/3153/event

```json
{
  "links": {
    "next": null,
    "previous": null
  },
  "pagination": {
    "previous_page": null,
    "current_page": 1,
    "next_page": null,
    "page_size": 500
  },
  "count": 23,
  "results": [
    {
      "id": 67917,
      "title": "SITCON 中區社群交流會",
      "start_date": "2023-05-28T10:00:00+08:00",
      "end_date": "2023-05-28T16:00:00+08:00",
      "url": "https://gdsc.community.dev/events/details/developer-student-clubs-national-yunlin-university-of-science-and-technology-presents-sitcon-zhong-qu-she-qun-jiao-liu-hui/",
      "status": "Published",
      "allows_cohosting": true,
      "cohost_registration_url": "https://gdsc.community.dev/events/details/developer-student-clubs-national-yunlin-university-of-science-and-technology-presents-sitcon-zhong-qu-she-qun-jiao-liu-hui/"
    },
    {
      "id": 67948,
      "title": "GDSC 中區 Lead 招生說明會",
      "start_date": "2023-05-24T18:15:00+08:00",
      "end_date": "2023-05-24T23:00:00+08:00",
      "url": "https://gdsc.community.dev/events/details/developer-student-clubs-national-yunlin-university-of-science-and-technology-presents-gdsc-zhong-qu-lead-zhao-sheng-shuo-ming-hui/",
      "status": "Published",
      "allows_cohosting": true,
      "cohost_registration_url": "https://gdsc.community.dev/events/details/developer-student-clubs-national-yunlin-university-of-science-and-technology-presents-gdsc-zhong-qu-lead-zhao-sheng-shuo-ming-hui/"
    },
  ],
  "status_counter": {
    "Published": 23,
    "Draft": 0,
    "Pending": 0,
    "Canceled": 0,
    "Live": 0,
    "Completed": 23
  }
}
```

#### Event API 查詢工具

> /api/chapter/<chapter_id>/event

可以加入 Query 進行回傳資料

| 查詢字串           | 格式     | 描述                  |
|----------------|--------|---------------------|
| start_date     | string | 搜尋活動開始日期            |
| end_date       | string | 搜尋活動局數日期            |
| order_by       | string | 根據回傳資料欄位進行排序        |
| fields         | array  | 說明需要回傳哪些特定資料(請參考附錄) |
| status         | string | 搜尋活動狀態(請參考附錄)       | 
| events_type_id | number | 透過活動種類 ID 進行搜尋      | 
| page_size      | number | 限制最大回傳活動數量(1~500)   | 

##### Example
> */api/chapter/<chapter_id>/event?status=Live&fields=id,title,status,url,description_short

#### Chapter APi 查詢工具

> /api/search/chapter

| 查詢字串          | 格式     | 描述                       |
|---------------|--------|--------------------------|
| around_radius | number | 搜尋方圓經緯度距離 (1 … 20,000)   |
| latitude      | number | 搜尋經度為  (-90.0 … +90.0)   |
| longitude     | number | 搜尋緯度為  (-180.0 … +180.0) |
| q             | string | 查詢字串                     |


##### Example 

1. 查詢全台的章節清單 (這個語法索引到的清單可能會不齊全）
   - > */api/search/chapter?latitude=23.5825&longitude=120.582&around_radius=200
2. 查詢全台的章節清單 (透過檢索回傳的(TW)強制回傳所有區域）
   - > */api/search/chapter?q=(TW)

---

## 附錄

### fields 可回傳資料欄位

```text
id,
title,
status,url,
description_short,
start_date,
end_date,
event_type,
event_type_title,
picture,
venue_name,
venue_address,
venue_city,
venue_zip_code,
created_ts,
updated_ts,
key_persons
```

### status 活動狀態

```text
Draft,
Pending,
Published,
Live,
Canceled
```

### 官方說明

[Link](https://docs.bevy.com/technical-documentation/api/specific-endpoints/chapter/list-chapter-events)