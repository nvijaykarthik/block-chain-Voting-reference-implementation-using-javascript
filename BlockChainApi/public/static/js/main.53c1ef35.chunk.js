(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/voteIcon.908a62ad.png"},26:function(e,t,a){e.exports=a(57)},31:function(e,t,a){},33:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(22),o=a.n(c),r=(a(31),a(8)),s=a(9),i=a(12),m=a(10),d=a(11),u=a(23),h=a.n(u),b=(a(33),a(60)),E=a(61),p=a(58),y=a(3),v=a(7),f=a.n(v),g=function(e){var t=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e.ch.timestamp),a=e.ch.transactions;return l.a.createElement("tr",null,l.a.createElement("td",null,e.ch.blockId),l.a.createElement("td",null,t),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-sm btn-warning","data-toggle":"modal","data-target":"#viewTxns",onClick:function(){return e.viewTxn(a,"Selected Transactions")}},"View Transaction")))},k=function(e){return e.blockChain.map(function(t,a){return l.a.createElement(g,{ch:t,key:t.blockId,index:a,viewTxn:e.viewTxn})})},C=function(e){return l.a.createElement("tr",null,l.a.createElement("th",null,e.txn.id),l.a.createElement("th",null,e.txn.voter),l.a.createElement("th",null,e.txn.candidate),l.a.createElement("th",null,e.txn.vote))},N=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={blockChain:{chain:[{blockId:"ad28773d-85e7-48d7-8fd3-3ccda2fc96b1",timestamp:1539157813611,transactions:"Genesys Block",hash:"43b92a4e296e9c38e6e93785ae1ac5cc618adeb5cb3c5695f7917d194b547569",prevHash:"",nonce:0}],pendingTransactions:[],rejectedTransactions:[]},selectedTxn:[],modelTitle:""},a.getBlockList=function(){var e=Object(y.a)(Object(y.a)(a));f.a.get("/api/blockchain/chain").then(function(t){e.setState({blockChain:t.data})},function(e){console.log(e)})},a.viewTxn=function(e,t){a.setState({selectedTxn:e,modelTitle:t})},a.updateMyChain=function(){var e=Object(y.a)(Object(y.a)(a));f.a.get("/api/updateMyChain").then(function(t){f.a.get("/api/blockchain/chain").then(function(t){e.setState({blockChain:t.data})},function(e){console.log(e)})},function(e){console.log(e)})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getBlockList()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-sm btn-light",onClick:this.getBlockList},"Refresh"),"\xa0",l.a.createElement("button",{className:"btn btn-sm btn-light","data-toggle":"modal","data-target":"#viewTxns",onClick:function(){return e.viewTxn(e.state.blockChain.pendingTransactions,"Pending Transactions")}},"Pending Transactions"),"\xa0",l.a.createElement("button",{className:"btn btn-sm btn-light","data-toggle":"modal","data-target":"#viewTxns",onClick:function(){return e.viewTxn(e.state.blockChain.rejectedTransactions,"Rejected Transactions")}},"Rejected Transactions")," \xa0",l.a.createElement("button",{className:"btn btn-sm btn-light",onClick:this.updateMyChain},"Update My Chain"),l.a.createElement("hr",null),l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"BlockId"),l.a.createElement("th",{scope:"col"},"timestamp"),l.a.createElement("th",{scope:"col"},"Transactions"))),l.a.createElement("tbody",null,l.a.createElement(k,{blockChain:this.state.blockChain.chain,viewTxn:this.viewTxn}))),l.a.createElement("div",{className:"modal",tabIndex:"-1",role:"dialog",id:"viewTxns"},l.a.createElement("div",{className:"modal-dialog modal-lg",role:"document"},l.a.createElement("div",{className:"modal-content bg-dark"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title"},this.state.modelTitle),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-light"},l.a.createElement("tr",null,l.a.createElement("th",null,"Txn Id"),l.a.createElement("th",null,"Voter"),l.a.createElement("th",null,"Candidate"),l.a.createElement("th",null,"Vote"))),l.a.createElement("tbody",null,this.state.selectedTxn.map(function(e){return l.a.createElement(C,{txn:e,key:e.id})})))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"))))))}}]),t}(n.Component),T=[{id:1,name:"Arasur Manoharan S",symbol:"AR",party:"BSP",count:0},{id:2,name:"Sreenivasan C",symbol:"SC",party:"AIADMK",count:0},{id:3,name:"Thirumalai Balaji T.A",symbol:"TA",party:"BJP",count:0},{id:4,name:"Pandi N",symbol:"AR",party:"CPM",count:0},{id:5,name:"Kumarappan R",symbol:"KR",party:"INDEPENDENT",count:0},{id:6,name:"Parasuraman R",symbol:"PR",party:"PMK",count:0},{id:7,name:"Balaji C.K",symbol:"BC",party:"SHS",count:0},{id:8,name:"Katchi Ganesan M.P",symbol:"KG",party:"Naam Tamilar",count:0},{id:9,name:"Philipdas A",symbol:"PD",party:"TVK",count:0}],j=function(e){return e.candidates.map(function(t){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("span",{className:"radio"},l.a.createElement("input",{name:"candidate",type:"radio",value:t.id,id:t.id,onChange:e.handleChange}))),l.a.createElement("td",null,l.a.createElement("span",{className:"symbol"},t.symbol)),l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.party))})},w=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={candidates:T,selectedId:0,alreadyVoted:!1,voteStatus:"Please Vote"},a.myTransactionStatus=function(){var e=Object(y.a)(Object(y.a)(a));f.a.get("/api/myTransactionStatus?user="+window.user).then(function(t){e.setState({voteStatus:t.data})},function(e){console.log(e)})},a.checkMyVote=function(){var e=Object(y.a)(Object(y.a)(a));f.a.get("/api/checkMyVote?user="+window.user).then(function(t){e.setState({alreadyVoted:t.data})},function(e){console.log(e)})},a.handleChange=function(e){a.setState({selectedId:e.target.value})},a.handleSubmit=function(e){if(e.preventDefault(),0!=a.state.selectedId){var t=Object(y.a)(Object(y.a)(a)),n=T.find(function(e){return e.id==a.state.selectedId}).name;f.a.post("/api/transaction",{voter:window.user,candidate:n}).then(function(e){console.log(e),t.setState({alreadyVoted:!0})}).catch(function(e){console.log(e)})}else alert("Please select a candidate")},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.checkMyVote(),this.myTransactionStatus()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("div",{className:"alert alert-success",role:"alert"},l.a.createElement("button",{className:"btn btn-sm btn-success",onClick:this.myTransactionStatus},"Check Status"),l.a.createElement("br",null),"Status of your vote is : ",this.state.voteStatus),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("button",{className:"btn btn-sm btn-light",type:"submit",disabled:this.state.alreadyVoted},"Cast Vote"),"\xa0",l.a.createElement("hr",null),l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Select"),l.a.createElement("th",{scope:"col"},"Symbol "),l.a.createElement("th",{scope:"col"},"Candidate"),l.a.createElement("th",{scope:"col"},"Party"))),l.a.createElement("tbody",null,l.a.createElement(j,{candidates:this.state.candidates,key:this.state.candidates.id,handleChange:this.handleChange})))))}}]),t}(n.Component),O=function(e){return e.candidates.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("span",{className:"symbol"},e.symbol)),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.party),l.a.createElement("td",null,e.count))})},S=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={candidates:T},a.votingCount=function(){var e=Object(y.a)(Object(y.a)(a));f.a.post("/api/countVote",{candidates:T}).then(function(t){e.setState({candidates:t.data.candidates})})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.votingCount()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Symbol "),l.a.createElement("th",{scope:"col"},"Candidate"),l.a.createElement("th",{scope:"col"},"Party"),l.a.createElement("th",{scope:"col"},"Vote Count"))),l.a.createElement("tbody",null,l.a.createElement(O,{candidates:this.state.candidates,key:this.state.candidates.id}))))}}]),t}(n.Component),x=function(){return l.a.createElement("main",null,l.a.createElement(b.a,null,l.a.createElement(E.a,{exact:!0,path:"/",component:N}),l.a.createElement(E.a,{exact:!0,path:"/vote",component:w}),l.a.createElement(E.a,{exact:!0,path:"/result",component:S})))},P=function(){return l.a.createElement("nav",{className:"nav nav-pills nav-justified"},l.a.createElement(p.a,{to:"/",className:"nav-link"},"Home"),l.a.createElement(p.a,{to:"/vote",className:"nav-link"},"Vote"),l.a.createElement(p.a,{to:"/result",className:"nav-link"},"Result"))},V=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement(P,null),l.a.createElement("hr",null),l.a.createElement("div",{className:"display-1 m-b-2"},"Blector"),l.a.createElement("img",{src:h.a,className:"logo",alt:"Blector Logo"}),l.a.createElement("hr",null),l.a.createElement("p",null,"Election using block chain technology"),l.a.createElement("span",null,"Connected to  ")),l.a.createElement("div",{className:"col-sm-8 content"},l.a.createElement("div",{className:"col-md-12 col-md-offset-3"},l.a.createElement(x,null)),l.a.createElement("br",null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=a(59);o.a.render(l.a.createElement(I.a,null,l.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.53c1ef35.chunk.js.map