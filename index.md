---
layout: home

hero:
  name: Base Tests
  text: Plans hub cho cả team
  tagline: YAML cho máy · MD cho người · Docs giữ rule · FE chạy Playwright
  image:
    src: /landscape/assets/intro-hero-base-tests.png
    alt: Plans hub
  actions:
    - theme: brand
      text: Đọc giới thiệu
      link: /landscape/INTRO-base-tests
    - theme: alt
      text: Scenario pilot
      link: /scenarios/CMP-01-auth/SC-LOGIN
    - theme: alt
      text: Cases Auth
      link: /cases/W-AD-AUTH-001/

features:
  - title: Member-first
    details: Scenario và case render tiếng Việt — Given/When/Then, bảng ví dụ, mermaid. Review nhẹ, ít tranh luận.
    link: /landscape/INTRO-base-tests
  - title: Docs-first
    details: Rule sống ở base-docs. Lỗ spec → handoff /update-spec. Hub chỉ bổ sung khi thiếu bao phủ.
    link: /landscape/INTRO-base-tests#cấu-trúc-từng-tầng--tầng-đó-có-gì
  - title: Sẵn sàng gen E2E
    details: TC YAML đủ route · testIds · coverage · a11y → pnpm testcase:gen trên FE (Playwright + axe).
    link: /cases/W-AD-AUTH-001/
  - title: Pyramid nhẹ
    details: Không YAML mọi tầng. CAP/SC = MD · TC/suites = YAML. Chi tiết từng tầng trong Intro.
    link: /landscape/INTRO-base-tests#cấu-trúc-từng-tầng--tầng-đó-có-gì
---
