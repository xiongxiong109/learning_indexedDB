// 数据模板
import './random.extend';
import {Random} from 'mockjs';

export const listTemplate = {
	data: {
		'unm|3-5': 'asd',
		'uid|8': '3',
		'isV|1': true, // 随机生成true / false
		'addr': '@first',
		'email': '@etail',
		'cid': '@cityId',
		'cnm': '@cNm(@cityId)',
		'age': '@age',
		'id|8-10': '@uuid',
		'useTime': '@useTime',
		'avatar': Random.image('200x200', '#c00', 'HelloWorld'),
		'arts|5-8': [
			{
				'id': Random.integer(2, 5),
				'title': '@articleTitle',
				'content': '@articleContent',
				'isRead|1': true 
			}
		]
	}
}