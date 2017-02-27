// 扩展random
import {Random} from 'mockjs';

Random.extend({

	cityId(data) {
		let ids = [1,456,12];
		return this.pick(ids);
	},
	// 可以直接通过@cNm(@cityId)的方式进行函数调用
	cNm(cid) {
		let nms = {
			1: '北京',
			456: '上海',
			12: '广州'
		}
		return nms[cid];
	},
	age() {
		// 返回20 ~ 70的自然数
		return Random.natural(20, 70)
	},
	uuid() {
		return Random.character()
	},
	useTime() {
		return Random.date('yyyy-MM-dd HH:mm:ss')
	},
	// 通过调用函数的方式, 可以在数组循环的时候返回不同的数据
	articleTitle() {
		return Random.string(3, 5);
	},
	articleContent() {
		return Random.paragraph(8, 15);
	}
});