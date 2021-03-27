// 负责操作localStore

class DataHelper {
    dataKey!: string;
    primaryKey!: string;

    constructor(dataKey: string, primaryKey: string) {
        this.dataKey = dataKey
        this.primaryKey = primaryKey
    }

    readData(): any {
        let strData: string | null = localStorage.getItem(this.dataKey)
        let arrData: any = []
        if (strData !== null) {
            arrData = JSON.parse(strData)
        }
    }

    // 保存数据
    saveData (arrData: Array<Object>): void {
        let str: string = JSON.stringify(arrData)
        localStorage.setItem(this.dataKey, str)
    }

    // 添加数据
    addData (newDataObj: any): number {
        let dataArray = this.readData()
        if (dataArray === null) {
            dataArray = []
        }
        // 如果数组的长度大于0，我们将最后一个元素的ID值取出来+1.作为新元素的ID值
        let newId = dataArray.length > 0 ? dataArray[dataArray.length -1][this.primaryKey] + 1 : 1
        dataArray.push(newDataObj)

        // 保存到localStore
        this.saveData(dataArray)
        return newId
    }

    removeDataById (id: number | string): boolean {
        let arr = this.readData()
        let index = arr.findIndex((ele: any) => {
            return ele[this.primaryKey] === id
        })
        if (index > -1) {
             arr.splice(index, 1)
            this.saveData(arr)
            return true
        } else {
            return false
        }

    }
}


