// indexeddb
// 打开或创建本地数据库
import DB_CONF from './conf/db.js';
import './mock';
import axios from 'axios';

// 这个方法可能会存在兼容性的写法
const DB = window.indexedDB;
let req;
// indexeddb的open方法是异步的api, 这句话执行完毕后并不可以立即获取到req.result
// 而是需要在onsuccess onerror 和 onupgradeneeded的回调函数中执行

if (DB) {
	// 注意, 如果先打开了高版本的db, 再回滚到低版本的db, 会报错说版本过低
	req = DB.open(DB_CONF.nm, DB_CONF.version);
}

// 数据库打开或创建成功
req.onsuccess = (e) => {
	if (e) {
		req.db = e.target.result;
		// 初始化数据库(注意，在第一次创建db的时候, 是不能调用createObjectStore方法的, 因为方法会处在update事务中，需要在update里面调用)
		// initDataBase(req.db);
		doDb(req.db);
	}
}

req.onerror = (e) => {
	console.log('error');
	console.log(e.target.error.message);
	// 关闭数据库
	// e.target.db && e.target.db.close();
	// 删除数据库
	DB.deleteDatabase(DB_CONF.nm);
}

// 数据库版本更新
req.onupgradeneeded = (e) => {
	req.db = e.target.result;
	// 初始化数据库
	initDataBase(req.db);
}

// 创建数据库
function initDataBase(db) {
	// 创建对象存储空间
	// sid是主键
	let objectStore = db.createObjectStore(DB_CONF.dbNm, {keyPath: 'sid'});
	// 创建索引
	// mobile是唯一
	objectStore.createIndex('mobile', 'mobile', {unique: true});
	// 增加字段
	objectStore.add({
		sid: '1',
		mobile: '18178976546'
	});
	doDb(db);
}

// 操作数据库
function doDb(db) {
	// console.log(db.objectStore);
}

// use axios to do ajax
axios.post('/apis/list', {
	userName: 'xiongxiong109'
})
.then(res => {
	console.log(res.data);
})
.catch(e => {
	console.log(e);
})