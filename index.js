metadata={systemName:"com.k2.delimitedconverter",displayName:"Delimited list converter Broker",description:"Converts delimited list to SMO list output.",configuration:{delimiter:{displayName:"Delimiter",type:"string",value:";"}}},ondescribe=async function({configuration:e}){postSchema({objects:{delimitedlistconverter:{displayName:"Delimited List Converter",description:"Converts delimited list to SMO list",properties:{id:{displayName:"ID",type:"number"},value:{displayName:"Value",type:"string"}},methods:{convert:{displayName:"Convert",type:"list",parameters:{pdelimitedlist:{displayName:"Delimited List",description:"Delimited List Input",type:"string"}},requiredParameters:["delimitedlist"],outputs:["id","value"]}}}}})},onexecute=function({parameters:e,configuration:i}){var t=i.delimiter,s=e.pdelimitedlist.split(t),l=s.length;let r=[];for(var a=1;a<=l;a++){var d={id:a,value:s[a-1]};r.push(d)}postResult(r.map(e=>({id:e.id,value:e.value})))};
//# sourceMappingURL=index.js.map
