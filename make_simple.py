from pathlib import Path
from openpyxl import Workbook, load_workbook

items = [
    '公司中文名称', '公司英文名称', '公司日文名称',
    '公司简介', '主营业务', '公司优势', '公司Logo',
    '公司地址', '联系电话', '联系邮箱',
    '产品名称', '产品简介', '产品功能', '产品优势',
    '产品应用场景', '产品图片', '产品视频', '客户案例',
    '英文资料', '日文资料',
]
w = Workbook()
s = w.active
s.title = '官网资料'
s.append(['需要的资料', '填写内容'])
for item in items:
    s.append([item, None])
p = Path('outputs/website-materials/官网资料清单.xlsx')
w.save(p)
r = load_workbook(p)
assert r.active.max_row == 21
assert r.active['A2'].value == '公司中文名称'
assert all(not c.has_style for row in r.active for c in row)
print('OK')
