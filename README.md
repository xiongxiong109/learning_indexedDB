# learning_indexedDB
learning_indexedDB

### `indexedDB` 是`html5`的浏览器端的数据库
#### 操作indexedDB的正确方式
`异步操作`	`索引查询`	`数据库字段更新`
window.indexedDB
与一般的数据库类似, 应该有建库、建表、增删改查的功能
每一个数据库通过version字段来更新数据库的表字段
当一个数据库的version发生改变的时候, 会监听onupgradeneeded事件来修改数据库的相关信息

数据库的建立和更新，在version没有发生变化的情况下，只会发生一次，
所以需要在建库阶段把数据库的相关表字段给建立好
后续的业务操作中, 将不再需要执行open、create等操作，而只需要依据已有的数据库的表字段进行crud操作