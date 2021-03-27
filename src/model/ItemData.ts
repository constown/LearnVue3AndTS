// 数据结构的封装

import Category from "@/model/CateEnum";
class ItemData {
    id!: number;
    cateGoryId!: Category;
    title!: string;
    content!: string;
    createTime!: string;
    constructor(id: number = -1, cateGoryId: Category = -1, title: string = '', content: string ='') {
        this.id = id,
        this.cateGoryId = cateGoryId,
        this.title = title,
        this.content = content,
        this.createTime = this.dateFormat()
    }

    dateFormat(): string {
        let date = new Date()
        let str = date.getFullYear() + '-' +  ((date.getMonth()+1).toString().padStart(2, '0')) + '-' + date.getDate() + ' ' + (date.getHours().toString().padStart(2, '0')) + ':' + (date.getMinutes().toString().padStart(2, '0'))
        return str
    }
}

export default ItemData