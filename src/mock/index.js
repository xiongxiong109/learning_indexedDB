// mock js
import Mock from 'mockjs';
import * as Temp from './template';

// config the mock
Mock.setup({
	timeout: '300-800'
})

// use mock to interrupt the ajax fetching
Mock.mock('/apis/list', Temp.listTemplate);