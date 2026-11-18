from pathlib import Path
from openpyxl import Workbook, load_workbook
from openpyxl.styles import Font, PatternFill, Alignment
from openpyxl.utils import get_column_letter

w = Workbook()
w.remove(w.active)
groups = {
    '公司资料': [
        ('公司名称', '必填', '公司全称、简称，中英日名称已有则提供'),
        ('公司简介', '必填', '主营业务、目标客户，中文100—300字'),
        ('核心优势', '必填', '提供3—5条，有实际数据更好'),
        ('Logo与品牌色', '必填', 'Logo源文件或透明PNG，品牌色已有则提供'),
        ('公开联系方式', '必填', '业务邮箱、电话、公司地址'),
        ('客户案例', '选填', '背景、解决的问题、成果，说明客户名称及Logo是否可公开'),
        ('资质与照片', '选填', '可公开的证书、办公及团队照片'),
        ('英文与日文资料', '待确认', '已有译文请提供，暂无填待翻译，并指定翻译确认人'),
        ('内容确认与后台维护人', '必填', '文案确认人、产品资料联系人、日常维护人'),
        ('域名与期望上线时间', '待确认', '已有域名填写域名即可，无需账号密码'),
    ],
    '产品资料模板': [
        ('产品名称', '必填', '中英日名称，暂无外文名称可标记待翻译'),
        ('一句话介绍', '必填', '说明这个产品是做什么的'),
        ('目标客户', '必填', '面向哪些行业、企业或使用人员'),
        ('解决的问题', '必填', '客户原来遇到什么问题'),
        ('核心功能', '必填', '列出3—6项功能及简短说明'),
        ('产品优势', '必填', '产品的特点，提供可核实的描述'),
        ('应用场景', '必填', '提供2—3个典型使用场景'),
        ('产品图片或截图', '必填', '提供原图或附件链接，去除客户隐私及测试信息'),
        ('视频或演示地址', '选填', '可公开访问的演示视频或演示网站'),
        ('案例与成效', '选填', '可公开案例，数据请说明口径'),
        ('咨询方式', '必填', '统一联系公司，或提供产品专属公开联系渠道'),
        ('英文介绍', '待确认', '已有资料直接提供；暂无填待翻译'),
        ('日文介绍', '待确认', '已有资料直接提供；暂无填待翻译'),
        ('首期是否展示及顺序', '必填', '填写是或否，以及期望展示顺序'),
    ],
}
for name, rows in groups.items():
    s = w.create_sheet(name)
    s.sheet_view.showGridLines = False
    s.append([name]); s.merge_cells('A1:E1')
    s['A1'].font = Font(name='微软雅黑', size=16, bold=True, color='203D60')
    s.row_dimensions[1].height = 32
    note = '填写黄色区域，附件可填共享链接；暂无资料填“待补充”，暂无译文填“待翻译”。'
    if name == '产品资料模板':
        note = '每个产品复制一份本表并以产品名命名。填写黄色区域，暂无资料填“待补充”。'
    s.append([note]); s.merge_cells('A2:E2'); s.row_dimensions[2].height = 32
    s.append(['资料项', '要求', '提供说明', '填写内容或附件链接', '提供人 / 备注'])
    for row in rows: s.append([*row, '', ''])
    for row in s:
        for c in row:
            c.alignment = Alignment(wrap_text=True, vertical='center')
            if c.row > 2: c.font = Font(name='微软雅黑', size=11, color='24364B')
            if c.row > 3: c.fill = PatternFill('solid', fgColor='FFF2CC' if c.column >= 4 else 'F0F4F8')
    for c in s[3]:
        c.fill = PatternFill('solid', fgColor='203D60')
        c.font = Font(name='微软雅黑', bold=True, color='FFFFFF')
    s.row_dimensions[3].height = 28
    for i in range(4, s.max_row + 1): s.row_dimensions[i].height = 60
    for i, width in enumerate([28, 12, 62, 55, 25], 1): s.column_dimensions[get_column_letter(i)].width = width
    s.freeze_panes = 'D4'
    s.auto_filter.ref = f'A3:E{s.max_row}'
    s.page_setup.orientation = 'landscape'
    s.page_setup.paperSize = s.PAPERSIZE_A3
    s.page_setup.fitToWidth = 1
    s.page_setup.fitToHeight = 0
    s.sheet_properties.pageSetUpPr.fitToPage = True
    s.print_title_rows = '1:3'
p = Path('outputs/website-materials/官网资料收集表.xlsx')
p.parent.mkdir(parents=True, exist_ok=True)
w.save(p)
r = load_workbook(p)
assert r.sheetnames == list(groups)
for s, rows in zip(r, groups.values()):
    assert s.max_row == len(rows) + 3
    assert all(s.cell(i, 4).value is None for i in range(4, s.max_row + 1))
print(p.resolve())
print('检查通过：2个工作表，24项资料，填写区域留空。')
