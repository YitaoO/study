const requestSync = require('sync-request')
const path = require('path')
const

function getProjectData(){

  let data=[];

  //获取所有组
  const resGroups = requestSync('GET', `http://gitlab.ewaytec.cn/api/v3/groups/?private_token=a2GAzGssp7Z4b5sS1pUv`, {})
  //设置组数据
  const groups=JSON.parse(resGroups.body.toString())

  // 获取所有组的详情（详情里包括每个组的全部项目列表），存到data里面
  groups.forEach(function(group,index,arr){
    const resProjects=requestSync('GET', `http://gitlab.ewaytec.cn/api/v3/groups/${group.id}?private_token=a2GAzGssp7Z4b5sS1pUv`, {})
    const projectsObj=JSON.parse(resProjects.body).projects;

    projectsObj.forEach(function(project,index,arr){
      //  console.log(project)
      //  debugger
       const resBranches=requestSync('GET', `http://gitlab.ewaytec.cn/api/v3/projects/${project.id}/repository/branches?private_token=a2GAzGssp7Z4b5sS1pUv`, {})
       const branchesObj=JSON.parse(resBranches.body);

       branchesObj.forEach(function(branch,index,arr){
         let dataJson={
           groupName:group.description.substr(0, 10) + '...' + ' | ' + group.name,
           projectName:project.description.substr(0, 10) + '...' + ' | ' + project.path,
           branche:branch.name

         }
        data.push(dataJson)
       })


    })

  })

  return data;
}


export default getProjectData()
