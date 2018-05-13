---
---

`/_config.yml`은 [YAML](https://ko.wikipedia.org/wiki/YAML)형식으로 작성한 테마 옵션이 들어있습니다. 지킬(jekyll)은 웹페이지를 빌드하면서 이 파일을 가장 먼저 참고합니다.

* 목차
{:toc}

# 테마의 메타정보
홈페이지의 메타정보입니다.
```yaml
# 메타 정보
title: 홈페이지 이름
subtitle: 보조이름
email: some@mail.com
author: soma0sd
```

* **title**: 페이지 상단의 제목표시줄과 사이드 네비게이션의 상단, 홈페이지의 상단에 표시되는 이름입니다.
* **subtitle**: 사이드바의 상단 제목 아래 표시될 이름입니다.
* **email**: 관련 기능이 추가될 예정입니다.

# URL 설정
```yaml
url: ""
baseurl: "/"
chapterurl: "docs/"
```

* **url**: `https://username.github.io/`와 같이 사용자의 메인 깃허브 페이지 주소를 입력합니다.
* **baseurl**: 만약 다른 레포지터리에서 페이지를 서비스하는 경우 해당하는 레포지터리 이름을 입력합니다.<br>**e.g.**만약 subrepo라는 이름의 레포지터리에서 이 테마를 실행한다면 `subrepo/`를 입력합니다.
* **chapterurl**: 문서가 들어가있는 경로를 지정합니다. 기본값은 `docs`로 지정되어 있습니다.

# 테마 색상 설정
TextBook은 테마 색상을 이름으로 지정합니다. 색상은 material design 가이드라인에서 안내하는 색상들을 제공합니다. 아래 링크를 참고하세요.

* [material 디자인 가이드: 색상](https://material.io/guidelines/style/color.html#color-color-palette)

```yaml
theme:
  color:
    primary: 'indigo'
    secondary: 'Deep Purple'
  style: light
```

* **theme.color.primary**: 페이지의 배경과 문서의 강조 색상입니다.
* **theme.color.secondary**: 버튼 등 선택요소의 색상입니다.

# 애드센스 설정
현재는 자동광고만 지원합니다.

```yaml
adsense: >
  <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "사용자의 애드센스 코드",
            enable_page_level_ads: true
       });
  </script>
```

`adsense: >` 하단에 자동광고 코드를 집어넣습니다. **주의**: 코드는 들여쓰기가 되어 있어야 합니다.

# 빌드 설정

이하의 내용은 수정할 경우 테마가 오작동 할 수 있습니다.

```yaml
timezone: Asia/Seoul
markdown: kramdown
permalink: pretty
encoding: UTF-8

defaults:
  -
    values:
      layout: "default"

kramdown:
  syntax_highlighter_opts:
    span:
      line_numbers: false
    block:
      line_numbers: true
      start_line: 1
```
