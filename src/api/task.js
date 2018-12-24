import axios from '@/libs/api.request'

export const getCommandlist = (key, value) => {
  return axios.request({
    url: '/task/v2/task_layout/command/',
    method: 'get',
    params: {
      key,
      value
    }
  })
}

export const operationCommand = (data, meth) => {
  return axios.request({
    url: '/task/v2/task_layout/command/',
    method: meth,
    data
  })
}

// 参数对照表
export const getArgslist = (key, value) => {
  return axios.request({
    url: '/task/v2/task_layout/args/',
    method: 'get',
    params: {
      key,
      value
    }
  })
}

export const operationArgs = (data, meth) => {
  return axios.request({
    url: '/task/v2/task_layout/args/',
    method: meth,
    data
  })
}
//
// 执行用户
export const getExecUserlist = () => {
  return axios.request({
    url: '/task/v2/task_layout/user/',
    method: 'get'
  })
}

export const operationExecUserlist = (data, meth) => {
  return axios.request({
    url: '/task/v2/task_layout/user/',
    method: meth,
    data
  })
}
// 模板
export const getTemplist = (key, value) => {
  return axios.request({
    url: '/task/v2/task_layout/temp/',
    method: 'get',
    params: {
      key,
      value
    }
  })
}

export const operationTemp = (data) => {
  return axios.request({
    url: '/task/v2/task_layout/temp/',
    method: 'post',
    data
  })
}

export const deleteTemp = (data) => {
  return axios.request({
    url: '/task/v2/task_layout/temp/',
    method: 'delete',
    data
  })
}
// 获取模板详情
export const getDetailslist = (value) => {
  return axios.request({
    url: '/task/v2/task_layout/details/',
    method: 'get',
    params: {
      temp_id: value
    }
  })
}

export const operationDetails = (data, meth) => {
  return axios.request({
    url: '/task/v2/task_layout/details/',
    method: meth,
    data
  })
}
// 任务订单
export const getTaskOrderlist = () => {
  return axios.request({
    url: '/task/v2/task/list/',
    method: 'get'
  })
}

// 审批执行   终止
export const operationOrderlist = (data, meth) => {
  return axios.request({
    url: '/task/v2/task/list/',
    method: meth,
    data
  })
}

// 审批干预
export const operationChecklist = (data, meth) => {
  return axios.request({
    url: '/task/v2/task/check/',
    method: meth,
    data
  })
}

// 查看订单详情
export const getTaskChecklist = (listId, getRunGroup, getRunHost) => {
  return axios.request({
    url: '/task/v2/task/check/',
    method: 'get',
    params: {
      list_id: listId,
      get_run_group: getRunGroup,
      get_run_host: getRunHost
    }
  })
}

// 查看历史订单
export const getTaskCheckHistorylist = (listId, getRunGroup, getRunHost) => {
  return axios.request({
    url: '/task/v2/task/check_history/',
    method: 'get',
    params: {
      list_id: listId,
      get_run_group: getRunGroup,
      get_run_host: getRunHost
    }
  })
}

// 日志websocket
export const logWS = 'ws://172.16.0.223:8900/v2/task/ws_log/'

// 代码仓库
export const getCoderepository = (key, value) => {
  return axios.request({
    url: '/task/v2/task_other/repository/',
    method: 'get',
    params: {
      key,
      value
    }
  })
}

export const operationCoderepository = (data, meth) => {
  return axios.request({
    url: '/task/v2/task_other/repository/',
    method: meth,
    data
  })
}
// 镜像仓库
export const getDockerrepository = (key, value) => {
  return axios.request({
    url: '/task/v2/task_other/docker_registry/',
    method: 'get',
    params: {
      key,
      value
    }
  })
}

export const operationDockerrepository = (data, meth) => {
  return axios.request({
    url: '/task/v2/task_other/docker_registry/',
    method: meth,
    data
  })
}

// 发布应用
export const getPublishlist = (key, value) => {
  return axios.request({
    url: '/task/v2/task_other/publish_cd/',
    method: 'get',
    params: {
      key,
      value
    }
  })
}

export const operationPublishlist = (data, meth) => {
  return axios.request({
    url: '/task/v2/task_other/publish_cd/',
    method: meth,
    data
  })
}

// 发布应用选择
export const getPublishApplist = (value) => {
  return axios.request({
    url: '/task/v2/task_other/publish_list/',
    method: 'get',
    params: {
      'publish_name': value
    }
  })
}

export const operationPublishApplist = (data, meth) => {
  return axios.request({
    url: '/task/v2/task_other/publish_list/',
    method: meth,
    data
  })
}
