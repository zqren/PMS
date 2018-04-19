
const routes =  [
    {
      path: '/',
      name:"home",
      component: (resolve)=>{
        require(['@/views/ActivityHome'],resolve)
      }
    },{
        path:"/shop",
        name:"shop",
        component:(resolve)=>{
            require(['@/views/ActivityShop'],resolve)
        }
    },{
        path:"/goods",
        name:"goods",
        component:(resolve)=>{
            require(['@/views/ActivityGoodsDetail'],resolve)
        }
    },{
        path:"/WeightManage",
        name:"WeightManage",
        component:(resolve)=>{
            require(['@/views/WeightManage'],resolve)
        },
        children:[{
            path:"ActivityLeaderHeader",
            name:"ActivityLeaderHeader",
            component:(resolve)=>{
                require(['@/views/ActivityLeaderHeader'],resolve)
            }

        },{
            path:"ActivityLeaderGroup",
            name:"ActivityLeaderGroup",
            component:(resolve)=>{
                require(['@/views/ActivityLeaderGroup'],resolve)
            }
        },{
            path:"ActivityMember",
            name:"ActivityMember",
            component:(resolve)=>{
                require(['@/views/ActivityMember'],resolve)
            }

        }]
    },{
        path:"/MemberMain",
        name:"MemberMain",
        component:(resolve)=>{
            require(['@/views/MemberMain'],resolve)
        }
    },{
        path:"/ActivityOtherWeightRpt",
        name:"ActivityOtherWeightRpt",
        component:(resolve)=>{
            require(['@/views/ActivityOtherWeightRpt'],resolve)
        }
    },{
        path:"/ActivityMyWeightRpt",
        name:"ActivityMyWeightRpt",
        component:(resolve)=>{
            require(['@/views/ActivityMyWeightRpt'],resolve)
        }
    },{
        path:"/ActivityStudentBody",
        name:"ActivityStudentBody",
        component:(resolve)=>{
            require(['@/views/ActivityStudentBody'],resolve)
        }
    },{
        path:"/ActivityStudentWeight",
        name:"ActivityStudentWeight",
        component:(resolve)=>{
            require(['@/views/ActivityStudentWeight'],resolve)
        }
    },{
        path:"/ActivityCheckImg",
        name:"ActivityCheckImg",
        component:(resolve)=>{
            require(['@/views/ActivityCheckImg'],resolve)
        }
    },{
        path:"/ActivityWeightRpt",
        name:"ActivityWeightRpt",
        component:(resolve)=>{
            require(['@/views/ActivityWeightRpt'],resolve)
        }
    },{
        path:"/ActivityManagerRpt",
        name:"ActivityManagerRpt",
        component:(resolve)=>{
            require(['@/views/ActivityManagerRpt'],resolve)
        }
        
    },{
        path:"/ActivityNotComp",
        name:"ActivityNotComp",
        component:(resolve)=>{
            require(['@/views/ActivityNotComp'],resolve)
        } 
    },{
        path:"/login",
        name:"login",
        component:(resolve)=>{
            require(['@/views/login'],resolve)
        }
    },{
        path:"/regist",
        name:"regist",
        component:(resolve)=>{
            require(['@/views/regist'],resolve)
        }
    },{
        path:"/updateInfo",
        name:"updateInfo",
        component:(resolve)=>{
            require(['@/views/updateInfo'],resolve)
        }
    }
]

export default routes