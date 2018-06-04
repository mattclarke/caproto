Search.setIndex({docnames:["api","async-clients","basics","command-line-client","index","install","iocs","pyepics-compat-client","references","release-notes","servers","sync-client","threading-client"],envversion:53,filenames:["api.rst","async-clients.rst","basics.rst","command-line-client.rst","index.rst","install.rst","iocs.rst","pyepics-compat-client.rst","references.rst","release-notes.rst","servers.rst","sync-client.rst","threading-client.rst"],objects:{"caproto.AccessRightsResponse":{access_rights:[0,2,1,""],cid:[0,2,1,""]},"caproto.Broadcaster":{log:[0,2,1,""],new_search_id:[0,3,1,""],our_role:[0,2,1,""],process_commands:[0,3,1,""],recv:[0,3,1,""],register:[0,3,1,""],search:[0,3,1,""],send:[0,3,1,""]},"caproto.ClearChannelRequest":{cid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ClearChannelResponse":{cid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ClientChannel":{client_name:[0,3,1,""],create:[0,3,1,""],disconnect:[0,3,1,""],host_name:[0,3,1,""],read:[0,3,1,""],subscribe:[0,3,1,""],unsubscribe:[0,3,1,""],version:[0,3,1,""],write:[0,3,1,""]},"caproto.ClientNameRequest":{name:[0,2,1,""]},"caproto.CreateChFailResponse":{cid:[0,2,1,""]},"caproto.ErrorResponse":{cid:[0,2,1,""],status_code:[0,2,1,""]},"caproto.EventAddRequest":{data_count:[0,2,1,""],data_type:[0,2,1,""],high:[0,2,1,""],low:[0,2,1,""],mask:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""],to:[0,2,1,""]},"caproto.EventAddResponse":{data:[0,2,1,""],data_count:[0,2,1,""],data_type:[0,2,1,""],sid:[0,2,1,""],status_code:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.EventCancelRequest":{data_type:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.EventCancelResponse":{data_type:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.HostNameRequest":{name:[0,2,1,""]},"caproto.NotFoundResponse":{cid:[0,2,1,""],version:[0,2,1,""]},"caproto.ReadNotifyRequest":{data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ReadNotifyResponse":{data:[0,2,1,""],data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],metadata:[0,2,1,""],status:[0,2,1,""]},"caproto.RepeaterConfirmResponse":{repeater_address:[0,2,1,""]},"caproto.RepeaterRegisterRequest":{client_address:[0,2,1,""]},"caproto.RsrvIsUpResponse":{address:[0,2,1,""],address_string:[0,2,1,""],beacon_id:[0,2,1,""],server_port:[0,2,1,""],version:[0,2,1,""]},"caproto.SearchRequest":{cid:[0,2,1,""],name:[0,2,1,""],payload_size:[0,2,1,""],reply:[0,2,1,""],version:[0,2,1,""]},"caproto.SearchResponse":{cid:[0,2,1,""],ip:[0,2,1,""],port:[0,2,1,""],version:[0,2,1,""]},"caproto.ServerChannel":{create:[0,3,1,""],create_fail:[0,3,1,""],disconnect:[0,3,1,""],read:[0,3,1,""],subscribe:[0,3,1,""],unsubscribe:[0,3,1,""],version:[0,3,1,""],write:[0,3,1,""]},"caproto.ServerDisconnResponse":{cid:[0,2,1,""]},"caproto.VersionRequest":{priority:[0,2,1,""],version:[0,2,1,""]},"caproto.VersionResponse":{version:[0,2,1,""]},"caproto.VirtualCircuit":{disconnect:[0,3,1,""],host:[0,2,1,""],key:[0,2,1,""],log:[0,2,1,""],new_channel_id:[0,3,1,""],new_ioid:[0,3,1,""],new_subscriptionid:[0,3,1,""],our_role:[0,2,1,""],port:[0,2,1,""],process_command:[0,3,1,""],recv:[0,3,1,""],send:[0,3,1,""]},"caproto.WriteNotifyRequest":{data:[0,2,1,""],data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],metadata:[0,2,1,""],sid:[0,2,1,""]},"caproto.WriteNotifyResponse":{data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],sid:[0,2,1,""],status:[0,2,1,""]},"caproto.sync.client":{get:[11,4,1,""],monitor:[11,4,1,""],put:[11,4,1,""]},"caproto.threading.client":{Context:[12,1,1,""],PV:[12,1,1,""],SharedBroadcaster:[12,1,1,""],Subscription:[12,1,1,""],VirtualCircuitManager:[12,1,1,""]},"caproto.threading.client.Context":{get_circuit_manager:[12,3,1,""],get_pvs:[12,3,1,""]},"caproto.threading.client.PV":{go_idle:[12,3,1,""],subscribe:[12,3,1,""],wait_for_search:[12,3,1,""]},"caproto.threading.client.SharedBroadcaster":{get_cached_search_result:[12,3,1,""],received:[12,3,1,""],search:[12,3,1,""],send:[12,3,1,""]},"caproto.threading.client.Subscription":{clear:[12,3,1,""],process:[12,3,1,""]},"caproto.threading.client.VirtualCircuitManager":{received:[12,3,1,""]},caproto:{AWAIT_CREATE_CHAN_RESPONSE:[0,0,1,""],AWAIT_SEARCH_RESPONSE:[0,0,1,""],AWAIT_VERSION_RESPONSE:[0,0,1,""],AccessRightsResponse:[0,1,1,""],Broadcaster:[0,1,1,""],CLIENT:[0,0,1,""],CLOSED:[0,0,1,""],CONNECTED:[0,0,1,""],ChannelType:[0,1,1,""],ClearChannelRequest:[0,1,1,""],ClearChannelResponse:[0,1,1,""],ClientChannel:[0,1,1,""],ClientNameRequest:[0,1,1,""],CreateChFailResponse:[0,1,1,""],DISCONNECTED:[0,0,1,""],EchoRequest:[0,1,1,""],EchoResponse:[0,1,1,""],ErrorResponse:[0,1,1,""],EventAddRequest:[0,1,1,""],EventAddResponse:[0,1,1,""],EventCancelRequest:[0,1,1,""],EventCancelResponse:[0,1,1,""],EventsOffRequest:[0,1,1,""],EventsOnRequest:[0,1,1,""],FAILED:[0,0,1,""],HostNameRequest:[0,1,1,""],IDLE:[0,0,1,""],LocalProtocolError:[0,1,1,""],MUST_CLOSE:[0,0,1,""],NEED_DATA:[0,0,1,""],NotFoundResponse:[0,1,1,""],REQUEST:[0,0,1,""],RESPONSE:[0,0,1,""],ReadNotifyRequest:[0,1,1,""],ReadNotifyResponse:[0,1,1,""],ReadRequest:[0,1,1,""],ReadResponse:[0,1,1,""],ReadSyncRequest:[0,1,1,""],RemoteProtocolError:[0,1,1,""],RepeaterConfirmResponse:[0,1,1,""],RepeaterRegisterRequest:[0,1,1,""],RsrvIsUpResponse:[0,1,1,""],SEND_CREATE_CHAN_REQUEST:[0,0,1,""],SEND_CREATE_CHAN_RESPONSE:[0,0,1,""],SEND_SEARCH_REQUEST:[0,0,1,""],SEND_SEARCH_RESPONSE:[0,0,1,""],SEND_VERSION_REQUEST:[0,0,1,""],SEND_VERSION_RESPONSE:[0,0,1,""],SERVER:[0,0,1,""],SearchRequest:[0,1,1,""],SearchResponse:[0,1,1,""],ServerChannel:[0,1,1,""],ServerDisconnResponse:[0,1,1,""],VersionRequest:[0,1,1,""],VersionResponse:[0,1,1,""],VirtualCircuit:[0,1,1,""],WriteNotifyRequest:[0,1,1,""],WriteNotifyResponse:[0,1,1,""],WriteRequest:[0,1,1,""]}},objnames:{"0":["py","data","Python data"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"]},objtypes:{"0":"py:data","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function"},terms:{"0x1522ff71f108":11,"0x1522ff7f3b88":12,"100x":7,"5c14b2fde07a":6,"abstract":2,"boolean":11,"byte":[0,2,3,11,12],"case":[2,3],"char":[0,3],"class":[0,6,12],"default":[0,3,6,11,12],"enum":[0,3,11],"final":[2,11,12],"float":[0,3,11,12],"function":[2,3,7,12],"import":[0,2,6,7,11,12],"int":[0,3,6,11],"long":[0,3,4],"new":[0,2,3,6,12],"return":[0,2,6,11,12],"super":6,"switch":0,"true":[0,11],"try":2,And:[0,4],For:[0,3,4,5,7,12],IDs:2,Its:[2,4,12],PVs:[2,3,6,7,11,12],That:3,The:[1,2,3,4,5,6,7,9,11,12],There:2,These:[0,2,3,8,12],Use:[0,3,4,11],Using:[2,4],With:0,__init__:[0,6],__main__:6,__name__:6,__repr__:0,_broadcast:3,_caproto_pv:7,_circuit:3,abandon:[4,12],abc:6,abid:2,about:[0,4,8,12],abov:[2,3,4],acceler:4,accept:[0,2,3,12],access:[0,3,7,8,11,12],access_respons:2,access_right:[0,2,3],access_rights_callback:12,accessright:[2,3],accessrightsrespons:[0,2,3],accident:12,accumul:12,across:12,act:6,action:12,activ:12,actual:[2,7],add:[0,12],add_callback:[7,12],added:12,adding:7,addit:[0,2,3,4,12],addition:3,addr:0,address:[0,2,7,12],address_str:0,adher:2,advantag:7,affect:2,affirm:0,after:[11,12],again:[2,3,11,12],against:[0,2,4,7],aggreg:12,air:3,alarm:[0,3],alarmsever:3,alarmstatu:3,all:[0,2,3,5,11,12],alloc:0,allow:[0,3],alon:5,alreadi:[2,3,12],also:[0,2,4,5],alwai:[0,2],andrew:8,ani:[0,2,3,12],announc:[0,2],anoth:[0,2,3,12],ansi:0,answer:[0,2],anyth:2,apart:7,api:[2,4,7],append:[11,12],appendix:4,applic:11,approach:12,appropri:0,apt:[4,5],arbitrari:12,architectur:4,archiv:3,arg:[6,12],arguabl:1,argument:[0,3,4,6,11,12],around:4,arrai:[0,2,3,4,5,11,12],arriv:[2,11],asid:2,ask:[2,12],aspect:7,assign:[0,12],assum:3,async:[5,6],asynchron:[2,4],asyncio:5,attr:6,attribut:[0,3,11,12],authent:2,author:[4,7],auto:2,automat:[0,12],avail:[2,3,5,11,12],avoid:12,await:[0,6,12],await_create_chan_respons:0,await_search_respons:0,await_version_respons:0,back:[4,5],background:[4,12],base:[3,4,6,8],basic:[0,4],batch:[7,12],batteri:4,bcast:0,bcast_socket:2,beacon:0,beacon_id:0,beamlin:6,beazlei:8,becaus:[2,5,7],becom:2,been:[0,2,6],befor:[0,2,11,12],begin:2,behav:11,behavior:[3,6,11],being:[0,12],below:[3,12],benchmark:4,better:2,between:[0,2,3],big:2,bigendianstructur:[0,11,12],bin:6,binari:[3,8],bit:12,block:11,blog:8,bookkeep:4,both:[0,2,7],branch:8,bridg:[7,11,12],brief:7,broad:4,broadcast:[2,4,12],bsd:4,buffer:[0,11,12],buffers_to_send:[0,2],build:[0,4],built:[0,4,5,12],builtin:2,bulk:7,bytearrai:2,bytes_receiv:2,bytes_recv:12,bytes_to_send:[0,2],byteslik:0,c392af11430d:6,cach:[3,11,12],caget:[3,7],call:[0,2,6,7,11,12],callabl:11,callback:[7,11,12],caller:[0,3,11],camonitor:3,can:[0,2,3,4,5,7,11,12],cancel:12,cannot:6,caproto:[0,1,2,6,7,11,12],caprotoerror:0,caprotokeyerror:0,caput:[3,7],care:2,carepeat:3,casever:[2,3,11,12],castatuscod:[2,3,11,12],cat:11,certain:[0,3],chan:2,chang:[0,2,6],channel:[3,7,8,11,12],channel_st:[7,12],channeltyp:[0,2,3,11,12],channnel:0,check:[0,2,3],chnage:0,choic:[4,5,6,7],choos:2,cid:[0,2,3],circ:0,circuit:[0,2,3,7,11,12],circuit_manag:12,circuit_st:[7,12],circuitst:0,class_nam:[0,3],claus:4,clean:2,clear:[2,12],clear_callback:7,clearchannelrequest:[0,2,3],clearchannelrespons:0,clever:4,click:0,client:[0,4,5,6,9],client_address:[0,3],client_nam:[0,2,12],clientchannel:[0,2],clientnamerequest:[0,2,3],clog:2,clone:5,close:0,code:[0,2,3,4,7,8,9,11,12],code_with_sever:[2,3,11,12],collect:[6,11,12],color:[0,3],color_log_handl:0,com:[0,5],combin:[3,5],come:[2,7],command:[2,4,5,6,11,12],commun:[0,2,4],compani:4,companion:0,comparison:2,compat:4,competit:7,complet:[0,2,3,4,5,11,12],compos:[2,6],compound:0,comprehens:[3,7],concept:[2,8],concurr:[4,12],conda:[4,5],condens:2,configur:[0,2,12],confirm:0,congest:0,connect:[0,2,7],connection_state_callback:12,consist:[0,4,7],constant:4,construct:12,context:[0,7,12],contigu:[4,11,12],continu:12,contribut:3,contributor:7,control:[0,2,4,5,7,11],conveni:[0,2,4,5],convention:2,convert:0,cooper:4,copi:[2,4,11,12],core:[4,9],correspond:0,cost:4,costli:12,could:2,count:[0,2,4,6],counter:6,counterpart:3,cours:[0,4],creat:[0,3,12],create_chan_respons:2,create_connect:2,create_fail:0,createchanrequest:[0,2,3],createchanrespons:[0,2,3],createchfailrespons:0,creation:[0,12],ctrl:[3,11],ctrl_char:0,ctrl_doubl:[0,3],ctrl_enum:0,ctrl_float:[0,3],ctrl_int:0,ctrl_long:0,ctrl_string:0,ctx:[0,12],ctype:[0,4,11,12],curio:5,current:[0,2,3,11,12],custom:4,custom_writ:6,customwrit:6,d942c0c2e3b2:6,daemon:3,dallan:3,daniel:3,data:[2,3,4,11,12],data_count:[0,2,3,11,12],data_typ:[0,2,3,11,12],databas:0,datagram:[0,2,3,7],david:8,davidsav:8,dbe_alarm:[0,11],dbe_properti:0,dbe_valu:[0,11],dbr:0,dbr_ctrl_float:3,dbr_time_doubl:0,debug:[0,3,4],declin:12,def:[2,6,7,11,12],default_prefix:6,default_protocol_vers:0,defens:4,defin:[6,7,12],defunct:[2,3,11,12],demo:[2,3,4,7,11,12],demonstr:[2,4],depend:[4,5],deprec:0,depth:8,dequ:2,desc:6,describ:0,descript:[2,3,11,12],design:[0,2,4,7],desir:0,detail:[0,2],detect:3,detector:6,determin:2,develop:[4,8],devic:4,dict:6,did:2,differ:[2,4,6,7],direct:0,directli:[0,2,4,11,12],directori:6,disconnect:[0,2,12],displai:[3,12],distribut:4,document:[1,4,7,8],doe:[0,2,12],doesn:2,doing:[0,2],don:2,done:2,dot:[3,11,12],doubl:[0,2,3,11,12],doucment:7,drop:[3,4,7],dtype:[0,6],dure:12,each:[0,2,3,4,11,12],easi:[2,4],easier:[2,3],eca_norm:[2,3,11,12],echo:0,echorequest:0,echorespons:0,effect:12,effici:[4,7,11,12],effort:4,effortlessli:4,either:[2,12],element:[0,2],elid:7,els:6,embodi:4,emploi:4,encapsul:[0,2,12],encapul:0,encod:[0,2,4],end:[0,2],endian:2,ensur:2,entir:7,enumer:0,env:6,environ:[2,3,6],epic:[0,2,3,4,7,8,12],epics_ca_addr_list:2,epics_ca_auto_addr_list:2,epics_ca_repeater_port:3,equal:6,equival:[0,2,12],era:4,error:0,error_messag:0,errorrespons:0,escap:[3,11],establish:4,etc:[2,4,5,12],evan:8,even:4,event:0,eventaddrequest:[0,2],eventaddrespons:[0,2],eventcancelrequest:[0,2],eventcancelrespons:[0,2],eventsoffrequest:0,eventsonrequest:0,ever:7,everi:[0,2,4,7],exactli:0,exampl:[0,2,3,7,11,12],example1:6,example2:6,example3:6,example4:6,example5:6,example6:6,except:4,exchang:12,execut:[3,12],exercis:[4,7],exist:[2,4,7,12],exit:[2,3],expand:0,expect:[0,2,11],experi:2,experiment:[1,4,9],explicitli:12,explor:4,expos:0,extract_address:2,extrem:[3,5],facilit:2,fail:0,failur:0,fairli:9,fall:5,fals:[2,3,11,12],fan:12,fashion:0,fast:12,featur:1,field:[0,3,11,12],file:4,filenam:6,fill:[0,2,6],fine:2,first:[0,2,4,5,12],flavor:2,follow:2,force_int_enum:11,format:3,formul:12,formula:8,found:[2,12],framework:[0,4],fresh:[0,2],friendli:[4,7,11,12],from:[0,2,3,4,6,7,11,12],full:[7,11],fulli:0,fun:4,fund:4,futur:[1,12],garbag:12,gener:[0,2],get:[6,7,11,12],get_address_list:2,get_cached_search_result:12,get_circuit_manag:12,get_pv:[6,7,12],gethostnam:12,getlogg:[0,12],getpass:[0,12],getus:[0,12],git:5,github:5,give:[0,2,7],given:[0,2,12],go_idl:12,going:2,gr_char:0,gr_doubl:0,gr_enum:0,gr_float:0,gr_int:0,gr_long:0,gr_string:0,guarante:12,h11:[4,8],hand:7,handi:4,handl:[0,2,4,8],handler:0,handshak:12,hard:[0,4],hardwar:4,has:[0,2,7,11,12],have:[2,4,5,6,12],header:[0,11,12],heartbeat:[0,2],heavi:7,heavili:1,help:[2,3],here:[0,2],hex:2,high:[0,2,11,12],higher:[2,3],highest:[0,3,11],highli:9,hold:[0,12],homebrew:[4,5,8],homog:0,host:[0,2],host_nam:[0,2,12],hostnamerequest:[0,2,3],hour:3,how:[0,2,4],howev:1,http:5,human:[4,11,12],hurrai:2,identif:0,identifi:0,idl:[0,7],ifi:6,ignor:[2,12],illeg:[0,2],immedi:12,implement:[0,1,2,3,4,7,9,11],implicitli:[6,12],importerror:6,incident:2,includ:[0,2,3,4,5,7],incom:2,increment:0,indefinit:11,independ:2,indic:0,indispens:4,individu:[0,2,12],industri:4,infer:11,info:3,inform:[0,12],inherit:[0,12],initi:[0,2,4,6,9,11,12],inlin:4,inline_styl:6,inlinestyleioc:6,input:[4,11],insensit:3,insid:0,inspir:4,instal:[2,3,4],instanc:[0,6],instanti:[0,2,12],instead:[0,4,7],integ:[0,2,3,11,12],intend:[3,7],interact:0,interest:[1,2,6],interfac:[2,3],intermedi:[5,11,12],intern:[0,2,12],interpret:[2,4],interrupt:11,introspect:4,involv:3,ioc:[2,3,4,7,11,12],ioc_arg_pars:6,ioc_exampl:[2,3,4,7,11,12],ioc_opt:6,ioid:[0,2,3,11,12],ipython:6,issu:[3,11],iter:0,its:[0,2,3,4,5,6,11,12],itself:[2,4],job:[2,12],johnson:8,juggl:2,just:[2,4,7,12],kah:4,keep:0,kei:0,ken:8,kenneth:8,keyerror:[0,12],keyword:11,know:[0,12],known:12,kwarg:[6,7,12],label:3,laboratori:4,lack:1,lambda:12,lan:3,larg:[4,7,12],last:6,later:12,lauer:8,layer:[0,4],lead:7,learn:4,least:[1,2],leav:[3,11],len:12,length:0,let:[0,2,3,11,12],level:[0,2,7,12],leverag:7,lib:5,libca:[4,7],librari:2,licens:4,lifetim:12,lightweight:5,like:[0,2,3,12],limit:0,line:[5,6],list:[0,2,3,4,11,12],listen:[2,3],load:[0,12],localhost:2,localprotocolerror:[0,2],locat:2,log:[0,3,7,12],logger:4,logger_nam:0,look:[0,2],lost:0,low:[0,2],lower:7,lower_alarm_limit:3,lower_ctrl_limit:3,lower_disp_limit:3,lower_warning_limit:3,lowest:[0,3,11],lyric:2,machin:[2,4],macro:4,macroifiednam:6,made:12,mai:[0,2,4,7,12],main:7,maintain:[0,4],make:[2,6,7,12],manag:[0,12],mani:[0,4,12],manual:[0,2,5],mask:[0,2,3,11],match:[0,2,12],matrix:2,maxim:[0,12],mean:[0,2],meet:4,memori:[4,11,12],memoryview:2,mere:12,messag:[0,2,3,4,12],messagehead:[0,11,12],metadata:[0,2,3,11,12],method:[0,2,4,5,12],michael:8,might:2,minim:[4,12],minut:3,miss:12,mit:4,mode:[3,5],model:4,modul:[5,6,7,12],monitor:11,more:[0,2,3,4,7,11,12],most:[1,4,6],motorsim:8,msut:12,much:[0,2],multipl:[2,3,4,11,12],must:[0,2,12],must_clos:0,my_beamlin:6,my_read:6,my_writ:6,name:[0,2,3,4,7,11,12],nameerror:6,narrow:0,nativ:[0,2,3,11],native_data_count:0,native_data_typ:0,ndarrai:[0,2,4,11,12],necessari:[2,4,5,12],need:[0,2,3,4],need_data:0,neg:0,neo:2,netifac:5,network:[2,4,7,8,12],never:12,new_channel_id:0,new_ioid:0,new_search_id:0,new_subscriptionid:0,next:[2,3,9,12],no_alarm:3,no_repli:0,none:[0,2,3,6,11,12],normal:[2,3,11,12],note:[4,7,11,12],notfoundrespons:0,notic:[0,2,12],notif:0,notifc:0,notifi:0,now:[2,3,4,6,7,11,12],nsl:5,num_bytes_need:0,number:[0,3,4,6,7,12],numer:3,numpi:[0,2,4,5,11,12],obei:2,object:[2,4,7,11,12],observ:6,obtain:[0,3],obviou:0,occasion:7,occur:12,off:0,old:2,onc:[2,11,12],one:[0,2,3,4,7,11,12],ones:2,onli:[0,3,4,5,6,11,12],onto:[11,12],opaqu:0,open:[0,2,6],oper:12,oppos:7,optim:11,option:[0,2,3,4,5,8,11,12],order:[0,12],organ:4,origin:[0,1],original_request:0,osx:8,other:[0,2,3,4,5,11,12],our:[0,2],our_rol:[0,2],out:[0,2,7,11,12],outgo:2,output:[0,2,3,4],over:[0,2,4,11,12],overal:12,overflow:8,overload:2,owes:4,own:4,pack:0,packag:[3,4],packet:[0,7],pad:0,pai:4,paramet:[0,2,3,6,11,12],parameter1:[0,11,12],parameter2:[0,11,12],pariti:1,pars:[0,2,3,8],part:0,particl:4,particular:[2,3,11,12],pass:[0,2,6,11,12],path:[3,6],pathlib:6,pattern:[2,4],payload:[2,4],payload_s:[0,11,12],peer:[0,2],per:0,perform:[4,11,12],period:[3,11,12],permiss:2,persist:12,physic:4,pip:4,place:3,placeholder1:6,placeholder2:6,plai:[0,2],platform:[2,6],plugin:8,point:12,polic:2,port:[0,2,3,11,12],portabl:[4,7],posit:[3,12],post:8,precis:3,prefix:6,previou:2,principl:4,print:[6,7,11,12],prior:12,priorit:0,prioriti:[0,2,3,7,11,12],process:[0,2,3,7,11,12],process_command:[0,2],program:4,programmat:4,progress:12,project:[4,8],promptli:12,pronounc:4,propag:0,properli:2,properti:3,protcol:8,proto:4,protocol:[0,2,9],protocol_vers:0,protocolerror:0,provid:[0,2,3,6,7,11,12],pull:7,pure:2,purpos:3,put:[4,6,7,11,12],put_ack:3,put_ackt:3,putter:6,pv_name:[3,6,7,11],pvdb:6,pvgroup:6,pvproperti:6,pvs:[7,12],pvspec:6,pyepic:[4,8],pyepics_compat:7,python3:[2,3,4,5,6,7,11,12],python:[0,3,5,7,8,11,12],queri:[0,3],queue:0,quick:2,quiet:3,rais:[0,2,12],randint:6,random:6,random_int:6,random_str:6,random_walk:[0,2,3,7,11,12],rang:2,rare:[2,12],rather:[0,7,12],rational:4,raw:[2,11,12],rbv:6,read:[0,3,4,11],read_from_bytestream:0,readabl:6,readi:[0,4],reading_count:6,readingcount:6,readnotifyrequest:[0,2,3],readnotifyrespons:[0,2,3,11,12],readrequest:0,readrespons:0,readsyncrequest:0,reagan:4,realli:2,rebroadcast:2,recal:2,receipt:[0,11,12],receiv:[0,2,3,4,7,11,12],recent:6,recommend:7,reconnect:12,record:0,recv:[0,2,12],recv_address:2,recvfrom:2,redo:12,reduc:12,refer:[0,4,12],regist:[0,3,12],registr:0,registration_retry_tim:12,registri:12,relat:[3,4],releas:[1,4],reli:[3,5],remot:0,remoteprotocolerror:[0,2],remov:[1,12],remove_callback:12,repeat:[0,11],repeater_address:0,repeaterconfirmrespons:0,repeaterregisterrequest:[0,2,3],replac:[3,4,7],repli:0,report:[0,2],repres:[0,7,12],represent:[11,12],req:2,request:[0,2,3,7,11,12],requir:[0,2,4,6,11,12],res:[11,12],resolv:[0,11],resourc:[4,8],respect:0,respond:0,respons:[0,2,3,7,11,12],rest:7,restor:0,result:[3,12],results_queu:12,retriev:[3,11],reus:2,reusabl:4,revers:2,revis:1,rewrit:4,richer:3,right:[0,2],robust:4,role:[0,2],root:4,rsrvisuprespons:0,rule:2,run:[2,3,4,6,7,12],run_opt:6,safe:[3,12],sai:[2,4],same:[0,2,4,6,11,12],sampl:7,san:[2,4,8],satisfi:11,save:12,scalar:[0,3],scientist:4,scratch:4,search:[0,3,12],search_respons:2,searches_pend:[7,12],searchrequest:[0,2,3,12],searchrespons:[0,2],second:[2,3,6,11,12],section:2,secur:2,see:[0,2,3,4,7,12],seen:0,select_backend:5,selector:12,self:6,send:[0,2,3,12],send_create_chan_request:0,send_create_chan_respons:0,send_search_request:0,send_search_respons:0,send_version_request:0,send_version_respons:0,sendmsg:2,sendto:2,sent:[0,2,3,4,12],sentinel:0,separ:[2,3,4,7,11,12],sequenti:0,serach:2,seri:3,serial:3,serv:[0,2],server:[0,2,3,4,5,6,9,11,12],server_port:0,serverchannel:0,serverdisconnrespons:[0,2],servic:12,set:[2,3,11,12],setlevel:[0,12],sever:[0,2,3,4,5,11,12],share:4,sharedbroadcast:12,shell:[2,3,7,11,12],shim:7,should:[0,2,3,11,12],show:[2,3],sid:[0,2,3],side:0,sigint:11,signatur:11,silenc:12,silent:12,similar:3,similarli:0,simpl:[0,2,4],simple_ioc:6,simpleioc:6,simplic:11,simplifi:4,sinc:3,singl:[0,2],sleep:7,slide:8,slower:12,snip:3,sock:2,socket:[0,2,4,8,11,12],some:[0,2,3,4,7,12],someth:0,somewhat:[2,3],sophist:[3,11],sort:[0,6],sourc:[0,4,8,11,12],space:[2,3],spawn:[3,11],speak:4,spec:[0,8,11],special:4,specif:[0,2,3,11,12],specifi:[0,2,12],speed:7,speedup:7,spell:2,stabl:9,stack:[7,8],stai:12,stale:12,standard:[0,3,4,5,12],star:4,start:[0,2,3,7,11,12],stash:2,state:[2,4,7,12],statu:[0,2,3,11,12],status_cod:[0,2],step:[2,7],still:[0,1,2,3,12],stipul:11,store:[11,12],stori:2,str:[0,6,11],strateg:4,strategi:4,stream:0,string:[0,3,6,11,12],struct:0,structur:[0,4,11,12],sts_char:0,sts_doubl:0,sts_enum:0,sts_float:0,sts_int:0,sts_long:0,sts_string:0,stsack_str:[0,3],style:4,sub:12,sub_arg:12,sub_kwarg:12,submit:12,subscrib:[0,3,7,11],subscript:[0,2,7,12],subscriptionid:[0,2],subscriptiontyp:[0,11],subsequ:12,success:[0,2,3,11,12],succinct:[2,4],succinctli:2,suit:7,superset:3,support:[0,2,3,7,12],suppress:3,surpris:12,sync:11,synchron:[2,3,4,5],synchrotron:4,sys:6,system:[0,2,4],tab:3,take:0,talk:[2,3,7,8,11,12],talli:4,target:0,tcp:[0,2,7,12],tech:8,telescop:4,tell:0,temp:6,temp_path:6,temporarili:[0,12],term:[0,2,4],termin:3,ters:3,test:[0,4,7],than:7,thei:[0,1,3,4,6,11,12],them:[0,2,7,12],therefor:12,thi:[0,2,3,5,6,8,11,12],thing:[2,6],think:0,those:2,thread:[1,4,5,6,7,11],threadpoolexecutor:12,three:[3,11],threshold:12,through:0,thu:12,time:[0,2,3,6,7,12],time_char:0,time_doubl:0,time_enum:0,time_float:[0,3],time_int:0,time_long:0,time_str:0,timedelta:3,timeout:[3,11,12],timeouterror:12,timestamp:3,tmp:6,togeth:[0,2],token:[3,12],too:[0,2],tool:4,toolkit:4,top:7,touch:12,traceback:6,track:[0,2,12],traffic:[2,8],transact:0,translat:2,transmit:[0,2],transpar:12,transport:[2,4,12],tri:0,trick:4,trio:5,tune:8,tupl:[0,2,11],turn:[0,12],tutori:4,two:[0,2,6,7,12],type:[2,3,4,11],typic:2,udp:[0,2,7,12],udp_sock:2,unansw:12,uncoupl:6,under:[0,4],underli:[7,11,12],uniqu:[0,2],unit:[3,4],unless:[2,5],unlimit:0,unpack:3,unsubscrib:[0,2,12],until:[2,12],unus:[0,12],updat:[0,3,4,11,12],upper_alarm_limit:3,upper_ctrl_limit:3,upper_disp_limit:3,upper_warning_limit:3,usag:[3,7],use:[0,2,3,4,5,7,12],use_notifi:0,used:[0,2,3,4,11,12],useful:[0,8],user:[0,2,7,12],uses:[0,11,12],using:[0,2,3,5,7,11,12],usr:6,usual:0,util:[2,3],val:6,valid:[0,2],valu:[0,3,6,7,11,12],variabl:[2,3],variou:[0,4,12],verbos:[3,7,12],veri:1,verifi:[2,4,5],version:[0,2,3,4,5],version_respons:2,versionrequest:[0,2,3],versionrespons:[0,2,3],via:[2,3,5,12],view:[0,3,11,12],violat:0,virtual:[0,2,3,11,12],virtualcircuit:[2,4,12],virtualcircuitmanag:12,virtualciruit:0,visual:3,vvv:3,wai:[0,2],wait:[3,12],wait_for_search:12,want:[2,7],war:4,warn:[3,12],watch:2,weak:12,weird:6,welcom:3,well:[4,5,11],were:[4,8,11,12],what:[0,2,4],when:[0,2,3,4,11,12],where:0,wherea:7,whether:[0,3,11],which:[0,2,3,4,11,12],whichev:[3,6],whose:6,why:[2,4,7],win32:6,wire:[2,4],wireshark:8,without:0,word:[2,4],work:[0,2,5,12],world:4,would:7,wrap:4,writabl:6,write:[0,3,4,11],writenotifyrequest:[0,2],writenotifyrespons:[0,2,12],writerequest:0,written:[4,7],wrote:6,x00:[2,11,12],x00random_walk:2,x01:[2,11,12],x05:2,x06:[2,11,12],x08:[11,12],x0f:[11,12],x10:2,x11:2,x18:2,x7f:2,x_pv:7,xf0:[11,12],xf11id:6,yes:2,yet:[0,3,12],you:[0,2,4,5,7],your:[0,3,4,5],zero:[4,12]},titles:["Core API Documentation","Asynchronous Clients","Writing Your Own Channel Access Client","Command-Line Client","caproto: a pure-Python Channel Access protocol library","Install Caproto","Input-Output Controllers","Pyepics-Compatible Client","References","Release Notes","Servers","Synchronous Client","Threading Client"],titleterms:{"try":4,The:0,Using:5,access:[2,4],acknowledg:4,api:[0,3,11,12],asynchron:1,basic:2,bookkeep:2,broadcast:0,caproto:[3,4,5],channel:[0,2,4],client:[1,2,3,7,11,12],close:2,command:[0,3],compat:7,connect:12,constant:0,content:[0,4],control:6,core:0,crazi:4,creat:2,custom:6,data:0,debug:12,demonstr:7,document:[0,3,11,12],each:6,event:2,except:0,file:6,from:5,get:3,idl:12,inlin:6,input:6,instal:5,ioc:6,isn:4,librari:4,line:[3,4],logger:[0,12],machin:0,macro:6,minim:5,monitor:[3,12],name:6,note:9,object:0,output:6,own:2,payload:0,pip:5,protocol:4,pure:4,put:3,pyepic:7,python:4,read:[2,6,12],reason:4,refer:8,regist:2,releas:9,repeat:[2,3],search:2,server:10,simpl:6,simplifi:2,sound:4,sourc:5,special:0,state:0,statist:4,style:6,subscrib:[2,12],synchron:11,talli:6,thi:[4,7],thread:12,three:4,tutori:[3,11,12],type:0,updat:[2,6],valu:2,virtualcircuit:0,vital:4,what:7,when:6,write:[2,6,12],written:6,your:2}})