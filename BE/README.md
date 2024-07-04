# Backend

## 기술스택
- JavaScript
- Express
- mongoDB

## API

### /page
- 페이지 리스트 가져오기
  - GET /api/pagesList

- 새로운 페이지 생성하기
  - POST /api/newPage

- 페이지 삭제
  - DELETE /api/delete/:id

- 페이지 타이틀 변경
  - PATCH /api/page/title/:id

- 페이지 블럭 변경
  - PATCH /api/page/block/:id

### /template
- 템플릿 리스트 가져오기
  - GET /api/templateList

- 템플릿 타이틀 변경
  - PATCH /api/template/title/:id

- 새로운 템플릿 생성
  - POST /api/newTemplate

- 템플릿 삭제
  - DELETE /api/template/delete/:id

- 템플릿 테스크 리스트 페이지 생성
  - POST /api/template/:templateId/column/:columnId/newPage

- 템플릿 columns 업데이트
  - PATCH /api/template/update/columns/:id

