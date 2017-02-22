// db的配置需要根据version来修改数据库内容
const DB_CONF = {
	// 数据库名
	nm: 'test_indexeddb',
	// 数据表名
	dbNm: 'test_xiong',
	// Value is not of type 'unsigned long long' version字段必须是 双精度长整型
	// 数据库版本
	version: 1
}

export default DB_CONF;