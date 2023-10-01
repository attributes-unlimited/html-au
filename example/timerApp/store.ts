import { idGen } from "../../src/index.js"

export type timerData = {
  id: string,
  range: string,
  time: string,
  action?: string
}

function getData(): Array<timerData> {
  return [
    {
      id: '1',
      range: '12:06-13:14',
      time: '1h 7m 57s'
    },
    {
      id: '2',
      range: '14:47-15:04',
      time: '17m 45s'
    },
    {
      id: '3',
      range: '16:38-17:24',
      time: '-46m 2s'
    },
    {
      id: '4',
      range: '18:07-22:49',
      time: '-4h 42m 11s'
    }
  ]
}

const getNewItem =(model:timerData)=>{
  return {
    range:model.range,
    time: model.time,
    id: model.id
  }
}

// all this store work could be replaced with server side and using au-server=""
export class TimeDataSvc {
  times: timerData[];
  constructor(){
    this.times = getData()
  }

  add(model:timerData){
    model.id = (Number(idGen.next().value) + this.times.length).toString()
    this.times.push(getNewItem(model))
  }

  edit(model:timerData){
    const idx = this.times.findIndex(f1=>f1.id === model.id)
    // might be better to use splice
    // @ts-ignore
    this.times = this.times.with(idx, getNewItem(model))
  }
  getAll(){
    return this.times
  }
  getById(id:string){
    return this.times.find(f => f.id === id) as timerData;
  }
}
