(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{362:function(v,_,t){"use strict";t.r(_);var s=t(6),r=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"软件设计师复习大纲"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#软件设计师复习大纲"}},[v._v("#")]),v._v(" 软件设计师复习大纲")]),v._v(" "),_("h2",{attrs:{id:"一、计算机系统基础知识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、计算机系统基础知识"}},[v._v("#")]),v._v(" 一、计算机系统基础知识")]),v._v(" "),_("p",[_("strong",[v._v("1.CPU的功能：")]),v._v(" 程序控制、操作控制、时间控制、数据处理。")]),v._v(" "),_("p",[_("strong",[v._v("2.计算机系统组成示意图：")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/isicman/image/main/img/image-20220911100235675.png",alt:"image-20220911100235675"}})]),v._v(" "),_("p",[_("strong",[v._v("3.数据表示：")]),v._v(" 原码、反码、补码、移码。（0为正，1为负）")]),v._v(" "),_("p",[_("strong",[v._v("4.移码：")]),v._v(" 如果机器字长为 N，偏移量为 "),_("code",[v._v("2^N-1")]),v._v("，则"),_("code",[v._v("[X]移=2^N-1+[X]补(X 为纯整数")]),v._v(")。"),_("code",[v._v("[X]移=1+X（X 为纯小数）")]),v._v("。")]),v._v(" "),_("p",[_("strong",[v._v("5.IEEE754：")]),v._v(" 符号位（1 位,0 正 1 负）+阶码（8 位,+127）+尾数（23 位,小数点在最高位之 后，随后省略最高位）。")]),v._v(" "),_("p",[_("strong",[v._v("6.浮点数加减：")]),v._v(" 0 操作数检查，对阶操作(小阶变大阶)，尾数加减(阶码用双符号位，尾数用 单符号位)，结果规格化，舍入处理(判定溢出)。")]),v._v(" "),_("p",[_("strong",[v._v("7.常用校验码：")]),v._v(" 奇偶校验码（只能检错）、海明码（纠错加检错）、循环冗余校验码（CRC）。")]),v._v(" "),_("p",[_("strong",[v._v("8.计算机体系结构分类：")]),v._v(" 单处理系统，并行处理与多处理系统，分布式处理系统。")]),v._v(" "),_("p",[_("strong",[v._v("9.指令集的发展:CISC（复杂指令集计算机）：")]),v._v(" 增强原有指令的功能，用更为复杂的新指令取 而代之；RISC（精简指令集计算机）：减少指令总数简化指令功能，优化编译降低复杂度。")]),v._v(" "),_("p",[_("strong",[v._v("10.指令控制方式：")]),v._v(" 顺序方式，重叠方式，流水方式。")]),v._v(" "),_("p",[_("strong",[v._v("11.RISC 中的流水线技术：")]),v._v(" 超流水线技术，超标量技术，超长指令字技术。")]),v._v(" "),_("p",[_("strong",[v._v("12.并发性的解决：")]),v._v(" 阵列处理机，并行处理机，多处理机。")]),v._v(" "),_("p",[_("strong",[v._v("13.主存与 cache 地址映射方式：")]),v._v(" 全相联映射-将主存一个块的地址与内容一起存入 cache 中，拷贝灵活但是比较器电路难设计实现；直接映射-一个主存块只能拷贝到 cache 的特定行上 去，硬件简单成本低但是容易冲突效率下降；组相联映射-主存块放到哪个组是固定的，但 是放到哪一行是灵活的，折中办法广泛采用。")]),v._v(" "),_("p",[_("strong",[v._v("14.虚拟存储器：")]),v._v(" 页式：页表硬件小，查表速度快但不利于存储保护；段式：界限分明便于 程序的模块化设计，易于编译修改和保护，但主存利用率低，产生大量碎片，查表速度慢； 段页式：折中办法，广泛采用，但地址变换速度比较慢。")]),v._v(" "),_("p",[_("strong",[v._v("15.计算机与外设数据交换：")]),v._v(" 无条件传送，查询方式传送，中断方式传送，直接存储器存取 方式（DMA）：CPU 仅在过程开始和结束时有处理，过程中 DMA 占用系统总线传送数据。")]),v._v(" "),_("p",[_("strong",[v._v("16.多中断处理办法：")]),v._v(" 多中断信号线法，中断软件查询法，菊花链法，总线仲裁法，中断向 量表法。")]),v._v(" "),_("p",[_("strong",[v._v("17.总线分类：")]),v._v(" 内部总线：芯片的互连，系统总线：CPU，内存，接口等的连接；外部总线： 数据交换。")]),v._v(" "),_("p",[_("strong",[v._v("18.信息安全 5 要素：")]),v._v(" 机密性，完整性，可用性，可控性，可审查性。")]),v._v(" "),_("p",[_("strong",[v._v("19.加密技术：")]),v._v(" 对称加密（私人密钥加密）：数据加密标准（DES）+三重 DES+RC-5+国际数 据加密算法（IDEA）+高级加密标准（AES）；非对称加密（公开密钥加密，比如 RSA 算法）： 加密模型+认证模型。")]),v._v(" "),_("p",[_("strong",[v._v("20.PKI：")]),v._v(" 一种遵循既定标准的密钥管理平台，能够为所有网络应用提供加密和数字签名等密 码服务及所必需的密钥和证书管理体系，必须具有权威认证机构、数字证书库、密钥备份和 恢复系统、证书作废系统、应用接口。")]),v._v(" "),_("p",[_("strong",[v._v("21.计算机可靠性：")]),v._v(" 可靠性：串联系统 "),_("code",[v._v("R=R1*R2")]),v._v("，并联系统"),_("code",[v._v("R=1-（1-R1）（1-R2）")]),v._v("；平均无故 障时间：串联系统 "),_("code",[v._v("K=K1+K2")]),v._v("，并联系统"),_("code",[v._v("K=1/K*(1+1/2)")]),v._v("。")]),v._v(" "),_("h2",{attrs:{id:"二、操作系统知识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、操作系统知识"}},[v._v("#")]),v._v(" 二、操作系统知识")]),v._v(" "),_("p",[_("strong",[v._v("1.操作系统的作用：")]),v._v(" 通过资源管理提高计算机系统的效率；改善人机界面，向用户提供友好的工作环境。")]),v._v(" "),_("p",[_("strong",[v._v("2.操作系统的特征：")]),v._v(" 并发性、共享性、虚拟性和不确定性")]),v._v(" "),_("p",[_("strong",[v._v("3.操作系统的功能：")]),v._v(" 处理机管理、文件管理、存储管理、设备管理、作业管理")]),v._v(" "),_("p",[_("strong",[v._v("4.操作系统的类型：")]),v._v(" 批处理操作系统（单道、多道）、分时操作系统（UNIX，多路性、独立性、交互性、及时性）、实时操作系统（快速的相应时间、有限的交互能力、高可靠性）、网络操作系统、分布式操作系统、微机操作系统（Windows，Linux）、嵌入式操作系统")]),v._v(" "),_("p",[_("strong",[v._v("5.程序并发执行的特点：")]),v._v(" 失去了程序的封闭性，程序和机器的执行程序的活动不再一一对应，并发程序间的相互制约性")]),v._v(" "),_("p",[v._v("**6.进程的组成： ** 程序、数据、进程控制块（PCB）")]),v._v(" "),_("p",[_("strong",[v._v("7.进程的状态：")]),v._v(" 新建、就绪、运行、阻塞、终止")]),v._v(" "),_("p",[v._v("**8.原语（若干条机器指令组成）的特点： ** 执行时不能被分割，要么都做要么都不做")]),v._v(" "),_("p",[_("strong",[v._v("9.进程的同步：")]),v._v(" 进程间完成一项任务时直接发生相互作用的关系")]),v._v(" "),_("p",[_("strong",[v._v("10 进程的互斥：")]),v._v(" 系统中各进程互斥使用临界资源")]),v._v(" "),_("p",[_("strong",[v._v("11.信号量的意义：")]),v._v(" 若 S>=0 表示某资源的可用数；若 S<0 则其绝对值表示阻塞队列中等待该资源的进程数")]),v._v(" "),_("p",[_("strong",[v._v("12.PV 操作（低级通讯方式）：")]),v._v(" P 操作申请一个资源，V 操作释放一个资源")]),v._v(" "),_("p",[_("strong",[v._v("13.高级通讯方式：")]),v._v(" 共享存储模式，消息传递模式，管道通信")]),v._v(" "),_("p",[_("strong",[v._v("14.管城：")]),v._v(" 由一些共享数据、一组能为并发进程所执行的作用在共享数据上的操作的集合、初始代码以及存取权组成，一种同步机制")]),v._v(" "),_("p",[_("strong",[v._v("15.进程调度（可剥夺+不可剥夺）算法：")]),v._v("  先来先服务算法：主要用于宏观调度；时间片轮转：微观调度，分时间片占用 CPU；优先级调度：根据优先级（静态+动态）；多级反馈调度：分多个优先级队列前三中调度的综合，先执行新进程。")]),v._v(" "),_("p",[_("strong",[v._v("16.产生死锁的原因：")]),v._v(" 竞争资源及进程推进顺序算法")]),v._v(" "),_("p",[_("strong",[v._v("17.产生死锁的四个必要条件：")]),v._v(" 互斥条件，请求保持条件，不可剥夺条件，环路条件")]),v._v(" "),_("p",[_("strong",[v._v("18.死锁的处理：")]),v._v(" 预防；避免（银行家算法：先计算，如果分配资源后系统进入不安全状态则不予分配）；检测（系统定时运行死锁检测程序）；解除（资源剥夺法+撤销进程法）")]),v._v(" "),_("p",[_("strong",[v._v("19.安全状态：")]),v._v(" 系统能按某种顺序来为每个进程分配其所需资源，使每个进程都能顺序完成")]),v._v(" "),_("p",[_("strong",[v._v("20.线程：")]),v._v(" 是进程中的一个实体，是被系统独立分配和调度的基本单位，基本上不拥有资源")]),v._v(" "),_("p",[_("strong",[v._v("21.存储器管理：")]),v._v(" 分配和回收主存空间、提高主存利用率、扩充主存、有效保护主存信息")]),v._v(" "),_("p",[_("strong",[v._v("22.存储器的的层次结构：")]),v._v(" 寄存器、快速缓存（cache）、主存、外存")]),v._v(" "),_("p",[_("strong",[v._v("23.地址重定位：")]),v._v(" 将逻辑地址转变成物理地址的过程，分静态和动态（程序运行时完成转换）")]),v._v(" "),_("p",[_("strong",[v._v("24.虚拟存储页面置换算法：")]),v._v(" 最佳置换（以后最久不会被使用），先进先出置换，最近最少未使用，最近未用")]),v._v(" "),_("p",[_("strong",[v._v("25.设备管理的目标：")]),v._v(" 提高设备的利用率，为用户提供方便统一的界面")]),v._v(" "),_("p",[_("strong",[v._v("26.磁盘调度（使平均寻道时间最少）算法：")]),v._v("  先来先服务，最短寻道时间优先，扫描算法，单向扫描调度")]),v._v(" "),_("p",[_("strong",[v._v("27.文件：")]),v._v(" 具有符号名的、在逻辑上具有完整意义的一组相关信息项的集合")]),v._v(" "),_("p",[_("strong",[v._v("28.文件系统：")]),v._v(" 操作系统中实现文件统一管理的一组软件和相关数据的集合，专门负责管理和存取文件信息的软件机构")]),v._v(" "),_("p",[_("strong",[v._v("29.存储管理方案示意图")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/isicman/image/main/img/image-20220911101704178.png",alt:"image-20220911101704178"}})]),v._v(" "),_("p",[_("strong",[v._v("30.文件系统的安全：")]),v._v(" 一类涉及到技术、管理、法律、道德和政治等问题；另一类涉及操作系统的安全机制")]),v._v(" "),_("p",[_("strong",[v._v("31.文件系统的可靠性：")]),v._v(" 转储和恢复，日志文件，文件系统的一致性")]),v._v(" "),_("p",[_("strong",[v._v("32.作业：")]),v._v(" 系统为完成一个用户的计算任务（或一次事物处理）所做的工作总和")]),v._v(" "),_("p",[_("strong",[v._v("33.作业状态：")]),v._v(" 提交，后备，执行，完成")]),v._v(" "),_("p",[_("strong",[v._v("34.作业调度算法：")]),v._v(" 先来先服务，短作业优先，响应比高优先，优先级调度，均衡调度")]),v._v(" "),_("p",[_("strong",[v._v("35.网络操作系统：")]),v._v(" 集中模式，客户端/服务器模式，对等模式")]),v._v(" "),_("p",[_("strong",[v._v("36.嵌入式操作系统：")]),v._v(" 微型化，可定制，实时性，可靠性，易移植性")]),v._v(" "),_("p",[_("strong",[v._v("37.shell 变量：")]),v._v(" 用户定义变量，系统定义变量，shell 定义变量")]),v._v(" "),_("h2",{attrs:{id:"三、网络基础知识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、网络基础知识"}},[v._v("#")]),v._v(" 三、网络基础知识")]),v._v(" "),_("p",[_("strong",[v._v("1.计算机网络（计算机技术+通信技术）的发展：")]),v._v(" 具有通信功能的单机系统->具有通信功能的多机系统->以共享资源为目的的计算机网络->以局域网及因特网为支撑环境的分布式计算机系统")]),v._v(" "),_("p",[_("strong",[v._v("2.计算机网络的功能：")]),v._v(" 数据通信，资源共享，负载均衡，高可靠性")]),v._v(" "),_("p",[_("strong",[v._v("3.计算机网络的分类：")]),v._v(" 局域网（LAN：10m~1000m），城域网（MAN：10km），广域网（WAN：100km 以上）")]),v._v(" "),_("p",[_("strong",[v._v("4.网络拓扑结构：")]),v._v(" 总线型，星型，环型，树型，分布式（无严格的布线规定和形状，各节点有多条线路相连）")]),v._v(" "),_("p",[_("strong",[v._v("5.OSI 七层参考模型：")]),v._v(" 物理层（物理地传送比特流），数据链路层（负责两相邻节点间无差错传送以帧为单位的数据），网络层（提供端到端的交换网络数据传送功能），传输层（提供可靠的数据传输服务），会话层（提供会话管理服务），表示层（提供格式化的表示和转换数据服务），应用层（提供网络与用户应用软件之间的接口服务）")]),v._v(" "),_("p",[_("strong",[v._v("6.网络互连设备：")]),v._v(" 中继器（物理层上实现局域网网段互连，用于扩展局域网网段长度），集线器（特殊的多路中继器，有信号方法功能并便于网络维护）；网桥（工作与数据链路层，用于连接两个局域网网段），交换机（按每一个包中的 MAC 地址相对简单地决策信息转发）；路由器（网络层异构互连，连接多个逻辑上分开的网络），网关（在两个不同类型协议的网络系统之间进行通信）")]),v._v(" "),_("p",[_("strong",[v._v("7.网络传输介质：")]),v._v(" 有线介质（双绞线，同轴电缆：直接传输数字信号，光纤：传输光信号、需信号转换）；无线介质（微波：利用无线电波传输，红外线：传输红外光信号，激光：传激光信号，卫星通信：传输电磁波信号）")]),v._v(" "),_("p",[_("strong",[v._v("8.局域网组成部件：")]),v._v(" 服务器（文件服务器、打印服务器、通信服务器），客户端（用户与网络应用接口设备），网络设备（网卡，收发器，中继器，集中器，网桥，路由器等），通信介质（数据的传输媒体），网络软件（底层协议软件、网络操作系统等）")]),v._v(" "),_("p",[_("strong",[v._v("9.协议：")]),v._v(" 规定通信时的数据格式、数据传送时序以及相应的控制信息和应答信号等内容")]),v._v(" "),_("p",[_("strong",[v._v("10.网络的标准：")]),v._v(" 电信标准，国际标准（IEEE 标准等），Internet 标准（自发标准非政府干预）")]),v._v(" "),_("p",[_("strong",[v._v("11.决定局域网特性的主要技术：")]),v._v(" 用以传输数据的传输介质，用以连接各种设备的拓扑结构，用以共享资源的介质访问控制方法")]),v._v(" "),_("p",[_("strong",[v._v("12.局域网协议：")]),v._v(" LAN 模型（物理层，数据链路层：逻辑链路控制子层、介质访问控制）；以太网（CSMA/CD 技术：边发送边接收、时刻侦听信道）；令牌环网（适用于环型网络结构的分布式介质访问控制：广播发送令牌、目标站进行处理）；FDDI（类似令牌环网协议、光纤作为传输介质）")]),v._v(" "),_("p",[_("strong",[v._v("13.广域网协议：")]),v._v(" 点对点协议（PPP：主要用于拨号上网，建立点对点连接发送数据），数字用户线（xDSL：不对称数字用户线 ADSL，甚高速数字用户线 VDSL），数字专线（电信数字数据网固定专线，电信铺设），帧中继（在用户网络接口之间提供用户信息流的双向传送，并保持顺序不变），异步传输模式（ATM：面向分组的快速分组交换模式，使用异步时分复用技术），X.25 协议（在本地数据终端设备和远程数据终端设备之间提供一个全双工、同步的透明信道）")]),v._v(" "),_("p",[_("strong",[v._v("14.TCP/IP 协议簇特性：")]),v._v(" 逻辑编址，路由选择，域名解析，错误检测和流量控制")]),v._v(" "),_("p",[_("strong",[v._v("15.TCP/IP 模型")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/isicman/image/main/img/image-20220911102307913.png",alt:"image-20220911102307913"}})]),v._v(" "),_("p",[_("strong",[v._v("16.Internet 地址格式：")]),v._v(" 域名格式，IP 地址格式")]),v._v(" "),_("p",[_("strong",[v._v("17.解决 IP 地址短缺问题：")]),v._v("  长期（使用 Ipv6），短期（使用网络地址翻译技术 NAT：在子网内部使用局部地址，外部使用少量的全局地址，通过路由器进行内部地址和外部地址的转换）")]),v._v(" "),_("p",[_("strong",[v._v("18.Ipv6：")]),v._v(" 40 个字节的首部长度，16 个字节的 IP 地址长度")]),v._v(" "),_("p",[_("strong",[v._v("19.服务端口：")]),v._v(" 公共端口（0~1023）注册登记端口（1024~65535）")]),v._v(" "),_("p",[_("strong",[v._v("20.Internet 高层协议：")]),v._v(" 域名服务（UDP 端口，53，通过 DNS 服务器将域名变换为 IP 地址）；远程登录服务（TCP 端口，23，将用户计算机与远程主机连接起来）；电子邮件服务（TCP端口，25：SMTP and 110：POP3，发送：SMTP，接收：SMTP+POP3）；WWW 服务（TCP端口，80，基于客户端/服务器模式的信息发送技术和超文本技术的综合）；文件传输服务（TCP 端口，20：数据连接 and 21：控制连接）")]),v._v(" "),_("p",[_("strong",[v._v("21.网络安全的威胁：")]),v._v(" 计算机存储着国家、机构、组织的秘密信息或个人的隐私成为某类人攻击的目标；软件规模的膨胀容易使系统存在缺陷；信息传输的安全性存在隐患；网络协议本身的漏洞也会引发安全问题")]),v._v(" "),_("p",[_("strong",[v._v("22.网络安全：")]),v._v(" 运行系统安全，信息系统的安全，信息传播的安全，信息内容的安全")]),v._v(" "),_("p",[_("strong",[v._v("23.信息系统的需求：")]),v._v(" 保密性，完整性，可用性，可控性，可核查性")]),v._v(" "),_("p",[_("strong",[v._v("24.网络的安全威胁：")]),v._v(" 物理威胁，网络攻击，身份鉴别，编程威胁，系统漏洞")]),v._v(" "),_("p",[_("strong",[v._v("25.网络的信息安全：")]),v._v(" 信息的存储安全（用户的标识与验证，用户存取权限限制，系统安全监控，计算机病毒防治，数据的加密，计算机网络安全）；信息的传输安全（链路加密，节点加密，端到端加密）")]),v._v(" "),_("p",[_("strong",[v._v("26.防火墙：")]),v._v(" 建立在内外网络边界的过滤封锁机制，防止不良数据包进出被保护的内部网络")]),v._v(" "),_("p",[_("strong",[v._v("27.防火墙的分类：")]),v._v(" 包过滤型（直接转发报文，对用户透明），应用代理网关型（通过服务器建立连接），状态检测型（建立状态连接表，跟踪检测每一个会话状态）")]),v._v(" "),_("p",[_("strong",[v._v("28.典型防火墙的体系结构：")]),v._v(" 包过滤路由器（在网络层对进出内部网络所有信息进行分析限 制），双宿主主机（代理服务器软件在双宿主主机上运行，每一个接口连接不同网段），被屏 蔽主机（由过滤路由器和应用网管组成，包过滤+代理服务，内网和外网双重保障），被屏 蔽子网（由两个包过滤路由器和一个应用网关组成，最安全的防火墙系统）")]),v._v(" "),_("h2",{attrs:{id:"四、数据库技术基础"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、数据库技术基础"}},[v._v("#")]),v._v(" 四、数据库技术基础")]),v._v(" "),_("p",[_("strong",[v._v("1.数据库系统：")]),v._v(" 数据库，硬件，软件，人员")]),v._v(" "),_("p",[_("strong",[v._v("2.DBMS（数据库管理系统）的功能：")]),v._v(" 数据定义，数据库操作，数据库运行管理，数据组织、存储和管理，数据库的建立和维护，与其他软件系统的通信功能等")]),v._v(" "),_("p",[_("strong",[v._v("3.DBMS 的特征：")]),v._v(" 数据结构化且统一管理，有较高的数据独立性，数据控制功能（数据库的安全性保护、数据的完整性、并发控制、故障恢复）")]),v._v(" "),_("p",[_("strong",[v._v("4.DBMS 分类：")]),v._v(" 关系数据库系统（实体间的联系用关系表示），面向对象的数据库系统（以对象形式对数据建模），对象关系数据库系统（在关系数据模型基础上提供处理新的数据类型操作的能力）")]),v._v(" "),_("p",[_("strong",[v._v("5 数据库系统体系结构：")]),v._v(" 集中式（数据、数据管理、数据库功能等都集中在一起），分布式（物理上分布+逻辑上分布），C/S 模式（客户端负责数据表示服务、服务器负责数据库服务），并行结构（多个 CPU 物理上连在一起处理）")]),v._v(" "),_("p",[_("strong",[v._v("6.数据库的三级模式：")]),v._v(" 概念模式（数据库中全部数据的逻辑结构和特征的描述、只涉及型的描述而不涉及具体的值），外模式（用户与数据库系统的接口、用户用到那部分数据的描述），内模式（数据物理结构和存储方式的描述、数据在数据库内部的表示方式）")]),v._v(" "),_("p",[_("strong",[v._v("7.数据库的两级映像：")]),v._v(" 模式/内模式映像（实现概念模式与内模式的转换），外模式/模式映像（实现外模式与概念模式的转换）")]),v._v(" "),_("p",[_("strong",[v._v("8.数据的独立性：")]),v._v(" 物理独立性（数据库的内模式改变时数据的逻辑结构不变），逻辑独立性（用户的应用程序与数据库的逻辑结构相互独立）")]),v._v(" "),_("p",[_("strong",[v._v("9.数据模型：")]),v._v(" 概念数据模型（E-R 模型等），基本数据模型（层次模型：用树型结构表示数据间的联系、网状模型：用网络结构表示数据间的联系、关系模型：用表格结构表示实体间的联系、面向对象模型：对象标识+封装+对象的属性+类和类层次+继承）")]),v._v(" "),_("p",[_("strong",[v._v("10.数据模型三要素：")]),v._v(" 数据结构，数据操作，数据的约束条件")]),v._v(" "),_("p",[_("strong",[v._v("11.E-R 图：")]),v._v(" 实体（矩形），联系（菱形），属性（椭圆形）")]),v._v(" "),_("p",[_("strong",[v._v("12.完整性约束：")]),v._v(" 实体完整性，参照完整性，用户自定义完整性")]),v._v(" "),_("p",[_("strong",[v._v("13.关系代数运算：")]),v._v(" 并，交，差，笛卡尔积，投影，选择，连接，除")]),v._v(" "),_("p",[_("strong",[v._v("14.SQL 语言的特点：")]),v._v(" 综合统一，高度非过程化，面向集合的操作方式，两种使用方式（自含式、嵌入式），语言简洁易学易用")]),v._v(" "),_("p",[_("strong",[v._v("15.SQL 语言的组成：")]),v._v(" 数据定义语言，交互式数据操纵语言，事务控制，嵌入式 SQL 和动态SQL，完整性，权限管理")]),v._v(" "),_("p",[_("strong",[v._v("16.SQL 数据定义：")]),v._v(" 创建（create），修改（alter），删除（drop）：表（table），视图（view[as select]），索引（index[on]）")]),v._v(" "),_("p",[_("strong",[v._v("17.SQL 数据查询：")]),v._v(" "),_("code",[v._v("select...from...where...group by...having...order by...")])]),v._v(" "),_("p",[v._v("**18.插入数据： ** "),_("code",[v._v("insert into...values...")])]),v._v(" "),_("p",[v._v("**19.修改数据： ** "),_("code",[v._v("update...set...=...where...")])]),v._v(" "),_("p",[_("strong",[v._v("20.删除数据：")]),v._v(" "),_("code",[v._v("delete from...where...")])]),v._v(" "),_("p",[_("strong",[v._v("21.授权：")]),v._v(" "),_("code",[v._v("grant...on...to...(with grant option)")])]),v._v(" "),_("p",[_("strong",[v._v("22.回收权限：")]),v._v(" "),_("code",[v._v("revoke...on...from...")])]),v._v(" "),_("p",[_("strong",[v._v("23.函数依赖：")]),v._v(" 反映属性间的联系（X→Y）；完全函数依赖：（学生 ID，所修课程 ID）→成绩；部分函数依赖 ：（学生 ID，所修课程 ID）→学生姓名；平凡函数依赖：X→Y 且 Y 包含于 X；非平凡函数依赖：X→Y 且 Y 不包含于 X；传递函数依赖：X→Y，Y→Z")]),v._v(" "),_("p",[_("strong",[v._v("24.规范化：")]),v._v(" 1NF： 每个分量都不可再分；2NF：消除非主属性对码的部分函数依赖；3NF：消除非主属性对码的传递函数依赖")]),v._v(" "),_("p",[_("strong",[v._v("25.模式分解标准：")]),v._v(" 无损连接，保持函数依赖")]),v._v(" "),_("p",[_("strong",[v._v("26.事务的 ACID 性质：")]),v._v(" 原子性，一致性，隔离性，持久性")]),v._v(" "),_("p",[_("strong",[v._v("27.事务管理：")]),v._v(" 事务开始（begin transaction），事务提交（commit），事务回滚（rollback）")]),v._v(" "),_("p",[_("strong",[v._v("28.数据库故障：")]),v._v(" 事务内部故障，系统故障，介质故障，计算机病毒")]),v._v(" "),_("p",[_("strong",[v._v("29.数据备份方法：")]),v._v(" 静态转储和动态转储，海量转储和增量转储，日志文件")]),v._v(" "),_("p",[_("strong",[v._v("30.数据恢复步骤：")]),v._v(" 反向扫描文件日志，对事物的更新操作执行逆操作，继续反向扫描和更新，直到事务的开始标志")]),v._v(" "),_("p",[_("strong",[v._v("31.并发控制的技术：")]),v._v(" 封锁（写锁、读锁）")]),v._v(" "),_("p",[_("strong",[v._v("32.数据不一致性：")]),v._v(" 丢失修改，不可重复读，读脏数据")]),v._v(" "),_("h2",{attrs:{id:"五、程序语言基础知识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、程序语言基础知识"}},[v._v("#")]),v._v(" 五、程序语言基础知识")]),v._v(" "),_("p",[_("strong",[v._v("1.编程语言之间的翻译形式：")]),v._v(" 汇编，解释，编译。")]),v._v(" "),_("p",[_("strong",[v._v("2.程序设计语言的定义：")]),v._v(" 语法，语义，语用。")]),v._v(" "),_("p",[_("strong",[v._v("3.程序语言的分类：")]),v._v(" 命令式程序设计语言："),_("code",[v._v("FORTRAN，PASCAL，C 语言")]),v._v("；面向对象的程序设计语言"),_("code",[v._v("（C++，JAVA，smaltalk）")]),v._v("；函数式程序设计语言（LISP）；逻辑型程序设计语言（PROLOG）。")]),v._v(" "),_("p",[_("strong",[v._v("4.程序语言的基本成分：")]),v._v(" 数据，运算，控制，传输。")]),v._v(" "),_("p",[_("strong",[v._v("5.汇编语言源程序：")]),v._v(" 指令语句，伪指令语句，宏指令语句。")]),v._v(" "),_("p",[_("strong",[v._v("6.汇编程序：")]),v._v(" 将汇编语言所编写的源程序翻译成机器指令程序。")]),v._v(" "),_("p",[_("strong",[v._v("7.编译过程：")]),v._v(" "),_("code",[v._v("源程序")]),v._v("---"),_("code",[v._v("词法分析")]),v._v("---"),_("code",[v._v("语法分析")]),v._v("---"),_("code",[v._v("语义分析")]),v._v("---"),_("code",[v._v("中间代码生成")]),v._v("---"),_("code",[v._v("代码优化")]),v._v("---"),_("code",[v._v("目标代码生成")]),v._v("---"),_("code",[v._v("目标代码")]),v._v("。（另全过程有符号表管理和出错处理）")]),v._v(" "),_("p",[_("strong",[v._v("8.解释程序：")]),v._v(" 分析部分：词法分析、语法分析、语义分析->中间代码；解释部分：解释执行中间代码。")]),v._v(" "),_("p",[_("strong",[v._v("9.编译与解释方式的比较：")]),v._v(" 前者效率高；后者更具有灵活性和可移植性。")]),v._v(" "),_("h2",{attrs:{id:"六、系统开发和运行知识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#六、系统开发和运行知识"}},[v._v("#")]),v._v(" 六、系统开发和运行知识")]),v._v(" "),_("p",[_("strong",[v._v("1.软件工程：")]),v._v(" 指应用计算机科学、数学及管理科学等原理，以工程化的原则和方法来解决软件工程的问题。其目的是提高软件生产率，提高软件质量，降低软件成本")]),v._v(" "),_("p",[_("strong",[v._v("2.软件生存周期：")]),v._v(" 可行性分析与项目开发计划、需求分析、概要设计、详细设计、编码、测试、维护")]),v._v(" "),_("p",[_("strong",[v._v("3.软件生存周期模型：")]),v._v(" 瀑布模型（按顺序阶段性开发），演化模型（先构造一个初始版本再不断改进），螺旋模型（制定计划、风险分析、实施工程、用户评估），喷泉模型(重视用户需求，允许各步骤交叉进行)")]),v._v(" "),_("p",[_("strong",[v._v("4.软件开发方法：")]),v._v(" 结构化方法（面向数据流，自顶向下逐层分解），jackson 方法（面向数据结构），原型化方法（开发一个对用户透明的框架，然后根据用户需求壮大），面向对象开发方法")]),v._v(" "),_("p",[_("strong",[v._v("5.需求分析：")]),v._v(" 确定软件系统的综合要求，分析软件系统的数据要求，导出系统的逻辑模型，修正项目开发计划，可开发一个原型系统")]),v._v(" "),_("p",[_("strong",[v._v("6.数据域的属性：")]),v._v(" 数据流，数据内容，数据结构")]),v._v(" "),_("p",[_("strong",[v._v("7.需求工程：")]),v._v(" 需求开发（需求捕获、需求分析、编写规格说明书、需求验证），需求管理（定义需求基线、处理需求变更、需求跟踪）")]),v._v(" "),_("p",[_("strong",[v._v("8.软件开发项目管理：")]),v._v(" 成本估算（自顶向下估算方法、自底向上估算方法、差别估算方法），风险分析（风险识别、风险预测、风险评估），进度管理（Gantt 图、PERT 图），人员管理（主程序员组、无主程序员组、层次式程序员组）")]),v._v(" "),_("p",[v._v("**9.软件配置管理的目标：**标识变更，控制变更，确保变更正确地实现，报告有关变更")]),v._v(" "),_("p",[_("strong",[v._v("10.基线：")]),v._v(" 软件生存期中各开发阶段的一个特定点，相当于断点，便于检查和肯定阶段成果")]),v._v(" "),_("p",[_("strong",[v._v("11.软件开发工具：")]),v._v(" 需求分析工具，设计工具，编码与排错工具，测试工具")]),v._v(" "),_("p",[_("strong",[v._v("12.软件维护工具：")]),v._v(" 版本控制工具，文档分析工具，开发信息库工具，逆向工程工具，再工程工具")]),v._v(" "),_("p",[_("strong",[v._v("13.软件管理和软件支持工具：")]),v._v(" 项目管理工具，配置管理工具，软件评价工具")]),v._v(" "),_("p",[_("strong",[v._v("14.软件过程评估的意义：")]),v._v(" 改进软件过程，降低软件风险")]),v._v(" "),_("p",[_("strong",[v._v("15.软件能力过程成熟度：")]),v._v(" 初始级，可重复级，已定义级，已管理级，优化级")]),v._v(" "),_("p",[v._v("**16.统一过程：**起始阶段， 精化阶段，构建阶段，移交阶段，产生阶段")]),v._v(" "),_("p",[_("strong",[v._v("17.敏捷开发：")]),v._v(" 极限编程（计划游戏、小型发布、隐喻、简单设计、测试先行、重构、结对编程、持续集成），水晶法（不同的项目需要不同的策略、约定和方法论），并列征求法（多个小组并行递增实现产品），自适应软件开发")]),v._v(" "),_("p",[_("strong",[v._v("18.软件质量特性：")]),v._v(" 功能性，可靠性，易使用性，效率，可维护性，可移植性")]),v._v(" "),_("p",[_("strong",[v._v("19.软件质量保证：")]),v._v(" 应用技术方法，进行正式的技术评审，测试软件，标准的实施，控制变更，度量，记录保存和报告")]),v._v(" "),_("p",[_("strong",[v._v("20.软件复杂性：")]),v._v(" 规模，难度，结构，智能度")]),v._v(" "),_("p",[_("strong",[v._v("21.软件质量：")]),v._v(" 设计质量（设计的规格说明书符合用户的要求），程序质量（程序按照设计规格说明所规定的情况正确执行）")]),v._v(" "),_("p",[_("strong",[v._v("22.设计质量评审内容：")]),v._v(" 是否合乎用户要求，可靠性，保密措施实现情况，操作特性实施情况，性能实现情况，是否具有可修改性可扩充性、可互换性、可移植性、可测试性、复用性")]),v._v(" "),_("p",[_("strong",[v._v("23.程序质量评审内容：")]),v._v(" 功能结构，功能的通用性，模块的层次，模块结构，处理过程的结构")]),v._v(" "),_("p",[_("strong",[v._v("24.软件实现容错的主要手段就是冗余")])]),v._v(" "),_("p",[_("strong",[v._v("25.冗余：")]),v._v(" 结构冗余，信息冗余，时间冗余，冗余附加调用")]),v._v(" "),_("p",[_("strong",[v._v("26.系统分析：")]),v._v(" 对当前系统进行详细调查，收集数据；建立当前系统的逻辑模型；分析现状，提出意见和新目标；建立新系统的逻辑模型；编写系统方案说明书")]),v._v(" "),_("p",[_("strong",[v._v("27.结构化分析方法（自顶向下逐层分解）：")]),v._v(" 数据流图，数据字典，小说明，补充材料")]),v._v(" "),_("p",[_("strong",[v._v("28.数据流图（DFD：描述系统的分解）：")]),v._v(" 数据流，加工，数据存储，外部实体")]),v._v(" "),_("p",[_("strong",[v._v("29.DFD 信息流的类型：")]),v._v(" 变换流（输入、变换、输出），事务流（输入到事务中心、选择执行）")]),v._v(" "),_("p",[_("strong",[v._v("30.数据字典（DD：对图中各成分进行说明）：")]),v._v(" 数据流条目，数据存储条目，数据项条目，加工条目")]),v._v(" "),_("p",[_("strong",[v._v("31.加工逻辑描述方法：")]),v._v(" 结构化语言，判定表，判定树")]),v._v(" "),_("p",[_("strong",[v._v("32.系统分析报告作用：")]),v._v(" 描述目标系统的逻辑模型，作为用户与开发人员之间的协议或合同， 作为目标系统验收和评价的依据")]),v._v(" "),_("p",[_("strong",[v._v("33.系统分析报告内容：")]),v._v(" 组织情况概述，现行系统概述，系统逻辑模型，新系统在各个业务 处理环节拟采用的管理方法、算法或模型，与新系统相配套的管理制度和运行体制的建立， 系统设计与实施的初步计划，用户领导审批意见")]),v._v(" "),_("p",[_("strong",[v._v("34.系统设计：")]),v._v(" 概要设计（设计软件系统总体结构、数据结构及数据库设计、编写概要设计 文档、评审），详细设计（分模块进行详细的算法设计、对模块内的数据结构进行设计、对数据库进行物理设计、其他设计、编写详细设计说明书、评审）")]),v._v(" "),_("p",[_("strong",[v._v("35.系统设计基本原理：")]),v._v(" 抽象，模块化，信息隐蔽，模块独立（耦合：模块之间联系的紧密程度；内聚：模块内部各元素之间联系的紧密程度）")]),v._v(" "),_("p",[_("strong",[v._v("36.系统结构设计原则：")]),v._v(" 分解-协调，自顶向下，信息隐蔽、抽象，一致性，明确性，模块间耦合尽可能小、内聚尽可能高，模块的扇入、扇出系数要合理，模块的规划适当")]),v._v(" "),_("p",[_("strong",[v._v("37.子系统划分的原则：")]),v._v(" 要具有相对独立性，之间的数据依赖性要尽可能小，结果应使数据冗余较小，应考虑今后管理发展的需要，应便于系统分阶段实现，应考虑各类资源的利用")]),v._v(" "),_("p",[_("strong",[v._v("38.模块（组成系统的基本单位）四要素：")]),v._v(" 输入和输出，处理功能，内部数据，程序代码")]),v._v(" "),_("p",[_("strong",[v._v("39.模块结构图：")]),v._v(" 模块，调用，数据，控制，转接")]),v._v(" "),_("p",[_("strong",[v._v("40.变换分析（从变换流型的 DFD 导出程序结构图）：")]),v._v("  确定输入流和输出流、分离出变换中心，第一级分解，第二级分解，事务分析")]),v._v(" "),_("p",[_("strong",[v._v("41.面向数据结构的设计方法（jackson 方法）：")]),v._v("  分析确定输入输出数据的逻辑结构，找出输入与输出数据结构有对应关系的数据单元，从描述数据结构的 jackson 图导出描述程序结构的 jackson 图，列出所有操作并分配到程序结构图上，用伪码表示程序")]),v._v(" "),_("p",[_("strong",[v._v("42.Jackson 图：")]),v._v(" 表达数据元素间的逻辑关系（顺序，选择，重复）或程序结构（顺序，选择，重复）")]),v._v(" "),_("p",[_("strong",[v._v("43.系统详细设计：")]),v._v(" 代码设计（唯一性、合理性、可扩充性、简单性、适用性、规范性、系统性），输入设计（确定输入数据内容、输入方式设计、输入格式设计、校对方式设计），输出设计（确定输出内容、选择输出设备与介质、确定输出格式），处理过程设计（程序流程图、盒图：NS 图、形式语言、决策树、决策表），用户界面设计（菜单方式、会话管理方式、提示方式与权限管理），安全控制设计（环境性因素、数据处理因素）")]),v._v(" "),_("p",[_("strong",[v._v("44.系统实施的任务：")]),v._v(" 按总体设计方案购置和安装计算机网络系统，软件准备，培训，数据准备，投入转换和试运行")]),v._v(" "),_("p",[_("strong",[v._v("45.系统实施的步骤：")]),v._v(" 按总体设计方案购置和安装计算机网络系统，建立数据库系统，程序设计，收集有关数据并进行录入工作和系统测试，人员培训、系统转换和试运行")]),v._v(" "),_("p",[_("strong",[v._v("46.程序设计方法：")]),v._v(" 结构化方法（模块内部程序各部分要自顶向下地结构化划分、各程序部分应按功能组合、各程序部分的联系尽量使用调用子程序方式而不是 GOTO 方式），原型方法（将带有普遍性的功能模块集中、开发完成通用模块、生成程序模块原型），面向对象的方法（一个简单直接的映射过程）")]),v._v(" "),_("p",[_("strong",[v._v("47.程序模块图")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/isicman/image/main/img/image-20220911105110363.png",alt:"image-20220911105110363"}})]),v._v(" "),_("p",[_("strong",[v._v("48.测试：")]),v._v(" 以最少的人力和时间发现潜在的各种错误和缺陷")]),v._v(" "),_("p",[_("strong",[v._v("49.测试过程：")]),v._v(" 制定测试计划，编制测试大纲，设计生成测试用例，实施测试，生成测试报告")]),v._v(" "),_("p",[_("strong",[v._v("50.软件测试：")]),v._v(" 单元测试（模块接口、局部数据结构、重要的执行路径、出错处理、边界条件），集成测试（把模块按系统设计说明书的要求组合起来进行测试），确认测试（有效性测 试、软件配置审查、验收测试），系统测试（恢复测试、安全性测试、压力测试、性能测试、 可靠性及可用性和可维护性测试、安装测试）")]),v._v(" "),_("p",[_("strong",[v._v("51.测试方法：")]),v._v(" 静态测试（人工检测、计算机辅助静态分析），动态测试（白盒测试：逻辑覆 盖、循环覆盖、基本路径测试；黑盒测试： 等价类划分、边值分析、错误猜测、因果图）")]),v._v(" "),_("p",[_("strong",[v._v("52.调试（改正测试时发现的错误）：")]),v._v(" 试探法，回溯法，对分查找法，归纳法，演绎法")]),v._v(" "),_("p",[_("strong",[v._v("53.系统文档：")]),v._v(" 软件开发过程中的文档，硬件采购和网络设计中的文档，系统建设过程中的 各种来往文件、会议纪要、会议单据等，程序资料和培训教程等")]),v._v(" "),_("p",[_("strong",[v._v("54.系统转换（新系统试运行成功后与旧系统相互转换）：")]),v._v(" 直接转换，并行转换，分段转换")]),v._v(" "),_("p",[_("strong",[v._v("55.系统可维护性的评价指标：")]),v._v(" 可理解性，可测试性，可修改性")]),v._v(" "),_("p",[_("strong",[v._v("56.系统维护：")]),v._v(" 硬件维护，软件维护（正确性维护、适应性维护、完善性维护、预防性维护）， 数据维护")]),v._v(" "),_("p",[_("strong",[v._v("57.系统维护的步骤：")]),v._v(" 提出维护或修改要求，领导审查并做出答复，领导分配任务、维护人 员执行修改，验收维护成果并登记修改信息")]),v._v(" "),_("p",[_("strong",[v._v("58.系统评价：")]),v._v(" 立项评价，中期评价，结项评价")]),v._v(" "),_("h2",{attrs:{id:"七、标准化和软件知识产权基础"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#七、标准化和软件知识产权基础"}},[v._v("#")]),v._v(" 七、标准化和软件知识产权基础")]),v._v(" "),_("p",[_("strong",[v._v("1.标准：")]),v._v(" 对重复性事务和概念所做的统一规定")]),v._v(" "),_("p",[_("strong",[v._v("2.标准化对象：")]),v._v(" 标准化的具体对象（需要指定标准的具体事务）；标准化的总体对象（各种 具体对象的全体所构成的整体）")]),v._v(" "),_("p",[_("strong",[v._v("3.标准化活动过程：")]),v._v(" 标准的制定，标准的实施，标准的更新")]),v._v(" "),_("p",[_("strong",[v._v("4.标准的分类：")]),v._v(" 根据适用范围（国际标准，国家标准，区域标准，行业标准，企业标准，项 目规范）；根据标准的性质（技术标准，管理标准，工作标准）；根据标准化的对象和作用（基 础标准，产品标准，方法标准，安全标准，卫生标准，环境保护标准，服务标准）；根据法 律的约束性（强制性标准，推荐性标准）")]),v._v(" "),_("p",[_("strong",[v._v("5.信息技术标准化：")]),v._v(" 信息编码标准化（如 ASCII 码）；汉字编码标准化（如 gb2312）；软件 工程标准化(基础标准，开发标准，文档标准，管理标准)")]),v._v(" "),_("p",[_("strong",[v._v("6.权威国际标准化组织：")]),v._v(" 国际标准化组织（ISO）；国际电工委员会（IEC）")]),v._v(" "),_("p",[_("strong",[v._v("7.知识产权：")]),v._v(" 人们基于自己的智力活动创造的成果和经营管理活动中的经验、知识而依法享 有的权利")]),v._v(" "),_("p",[_("strong",[v._v("8.知识产权的分类：")]),v._v(" 工业产权（专利、实用新型、工业品外观设计、商标、服务标记、厂商名称、产地标记、原产品名称、制止不正当竞争等）；著作权（版权）")]),v._v(" "),_("p",[_("strong",[v._v("9.知识产权的特点：")]),v._v(" 无形性，双重性，确认性，独占性，地域性，时间性")]),v._v(" "),_("p",[_("strong",[v._v("10.计算机软件著作权受保护条件：")]),v._v(" 独立创作，可被感知，逻辑合理")]),v._v(" "),_("p",[_("strong",[v._v("11.计算机软件著作权的权利：")]),v._v(" 人身权（发表权，署名权）；著作财产权（使用权，复制权，修改权，发行权，翻译权，注释权，信息网络传播权，出租权，使用许可权，获得报酬权，转让权）")]),v._v(" "),_("p",[_("strong",[v._v("12.软件经济权利的许可使用：")]),v._v(" 独占许可使用，独家许可使用，普通许可使用，法定许可使用，强制许可使用")]),v._v(" "),_("p",[_("strong",[v._v("13.软件著作权：")]),v._v(" 谁开发，谁享有")]),v._v(" "),_("p",[_("strong",[v._v("14.计算机软件著作权特点：")]),v._v(" 技术性，依赖性，多样性，运行性")]),v._v(" "),_("p",[_("strong",[v._v("15.软件著作权侵权的法律责任：")]),v._v(" 民事责任，行政责任，刑事责任")]),v._v(" "),_("p",[_("strong",[v._v("16.商业秘密：")]),v._v(" 部位公众所知的、能为权利人带来经济利益、具有实用性并经权利人采取保密措施的技术信息和经营信息；包括经营秘密和技术秘密")]),v._v(" "),_("p",[_("strong",[v._v("16.商业秘密的构成条件：")]),v._v(" 未公开性，实用性，保密性")]),v._v(" "),_("p",[_("strong",[v._v("17.授予专利权的条件：")]),v._v(" 新颖性，创造性，实用性")]),v._v(" "),_("p",[_("strong",[v._v("18.软件企业应建立的合同规范：")]),v._v(" 劳动合同关系，软件开发合同，软件许可使用（或转让）合同")]),v._v(" "),_("h2",{attrs:{id:"八、软件系统分析与设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#八、软件系统分析与设计"}},[v._v("#")]),v._v(" 八、软件系统分析与设计")]),v._v(" "),_("p",[_("strong",[v._v("1.软件设计师应用性技术内容：")]),v._v(" 结构化分析与设计；数据库分析与设计；面向对象分析与设计；算法分析与设计；面向过程的程序设计与实现；面向对象的程序设计与实现")]),v._v(" "),_("p",[_("strong",[v._v("2.结构化分析与设计：")]),v._v(" 确定系统边界，画出系统环境图；自顶向下，画出各层数据流图；定义数据字典；定义加工说明；将图、字典以及加工组成分析模型")]),v._v(" "),_("p",[_("strong",[v._v("3.数据库分析与设计：")]),v._v(" 数据库规划；需求描述与分析；数据库与应用程序设计；数据库系统实现；测试阶段；运行维护")]),v._v(" "),_("p",[_("strong",[v._v("4.数据库设计的方法：")]),v._v(" 用户需求分析（调查机构情况，熟悉业务活动，明确用户需求，确定系统边界，分析系统功能，分析系统数据，编写分析报告）；概念设计（数据建模，E-R 方法）；逻辑设计（数据模式设计：层次模型、网状模型、关系模型）；物理设计（确定数据分布，确定数据的存储结构，确定数据的访问方式）")]),v._v(" "),_("p",[_("strong",[v._v("5.面向对象分析与设计的步骤：")]),v._v(" 建模系统功能（确定参与者，确定需求用例，构造用例模型，记录需求用例描述）；定义领域模型（定义概念、属性和重要的关联）；定义交互、行为和状态（确定并分类用例设计类，确定类属性、行为和责任）；定义设计类图（会议，用户，会议主题，稿件，审阅意见）")]),v._v(" "),_("p",[_("strong",[v._v("6.算法设计过程：")]),v._v(" 理解问题；确定相关因素（包括问题的输入与输出、用何种数据结构、用什么样的算法设计策略）；设计算法；证明算法的正确性；分析算法的效率；实现算法7.算法问题类型：查找问题；排序问题；图问题；组合问题（最优化问题）；几何问题（点、线、面、体）")]),v._v(" "),_("p",[_("strong",[v._v("8.面向过程的程序设计与实现的核心：")]),v._v(" C 语言->指针")]),v._v(" "),_("p",[_("strong",[v._v("9.面向对象的程序设计与实现的核心：")]),v._v(" 设计模式")]),v._v(" "),_("h2",{attrs:{id:"九、多媒体基础知识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#九、多媒体基础知识"}},[v._v("#")]),v._v(" 九、多媒体基础知识")]),v._v(" "),_("p",[_("strong",[v._v("1.媒体：")]),v._v(" 感觉媒体（使人产生感觉的媒体），表示媒体（传输感觉媒体的中介媒体），表现媒体（进行信息输入和输出的媒体），存储媒体（用于存储表示媒体的物理介质），传输媒体（传输表示媒体的物理介质）")]),v._v(" "),_("p",[_("strong",[v._v("2.多媒体的特性：")]),v._v(" 多样性，集成性，交互性，非线性，实时性，信息使用的方便性，信息结构的动态性")]),v._v(" "),_("p",[_("strong",[v._v("3.虚拟现实：")]),v._v(" 运用计算机对现实世界进行全面仿真，创建与现实社会类似的环境，通过多种传感设备使用户“投入到该环境中”，实现用户与该环境直接进行自然交互")]),v._v(" "),_("p",[_("strong",[v._v("4.虚拟现实技术的特征：")]),v._v(" 多感知（听觉感知、力觉感知、触觉感知、运动感知、味觉感知、嗅觉感知），沉浸（用户感受到的模拟环境的真实程度），交互（用户对模拟环境内物体的可操作程度和从环境得到反馈的自然程度）")]),v._v(" "),_("p",[_("strong",[v._v("5.虚拟现实的分类：")]),v._v(" 桌面虚拟现实，完全沉浸的虚拟现实，增强现实性的虚拟现实，分布式虚拟现实")]),v._v(" "),_("p",[_("strong",[v._v("6.声音感觉的三个指标：")]),v._v(" 音量，音调，音色")]),v._v(" "),_("p",[_("strong",[v._v("7.声音信号的数字化：")]),v._v(" 采样，量化，编码")]),v._v(" "),_("p",[_("strong",[v._v("8.数字语音的数据压缩方法：")]),v._v(" 波形编码，参数编码，混合编码")]),v._v(" "),_("p",[_("strong",[v._v("9.声音合成：")]),v._v(" 语音合成（发音参数合成、声道模型参数合成、波形编辑合成），音乐合成")]),v._v(" "),_("p",[_("strong",[v._v("10.MIDI（乐器数字接口）：")]),v._v(" 数字音乐的国际标准")]),v._v(" "),_("p",[_("strong",[v._v("11.色彩三要素：")]),v._v(" 亮度，色调，色饱和度")]),v._v(" "),_("p",[_("strong",[v._v("12.彩色空间：")]),v._v(" RGB，CMY，YUV 等")]),v._v(" "),_("p",[_("strong",[v._v("13.图形数据表示形式：")]),v._v(" 矢量图形（用数学的方式描述图像），位图图像（用像素点来描述的图）")]),v._v(" "),_("p",[_("strong",[v._v("14.图像的属性：")]),v._v(" 分辨率，图像深度，真彩色和伪彩色")]),v._v(" "),_("p",[_("strong",[v._v("15.图像的数据量：")]),v._v(" 图像的总像素*图像深度/8")]),v._v(" "),_("p",[_("strong",[v._v("16.数据压缩：")]),v._v(" 有损压缩（压缩过程中损失一定信息），无损压缩（行程长度编码，增量调制编码，霍夫曼编码）")]),v._v(" "),_("p",[_("strong",[v._v("17.多媒体数据压缩编码标准：")]),v._v(" JPEG，MPEG，H.261")]),v._v(" "),_("p",[_("strong",[v._v("18.动画（本质是运动）：")]),v._v(" 实时动画（用各种算法来实现运动物体的运动控制），矢量动画（由矢量图衍生出的动画形式），二维动画（对传统动画的一个改进），三维动画（根据三维数据模型）")]),v._v(" "),_("p",[_("strong",[v._v("19.彩色电视制式：")]),v._v(" NTSC 制，PAL 制，SECAM 制")]),v._v(" "),_("p",[_("strong",[v._v("20.数字视频标准：")]),v._v(" 采样频率，分辨率，数据量")]),v._v(" "),_("p",[_("strong",[v._v("21.超文本（将文本中遇到的一些相关内容通过链接组织在一起）三要素：")]),v._v(" 节点，链，网络")]),v._v(" "),_("p",[_("strong",[v._v("22.超媒体：")]),v._v(" 用超文本方式组织和处理多媒体信息")]),v._v(" "),_("p",[_("strong",[v._v("23.流媒体：")]),v._v(" 在网络中使用流式传输技术的连续时基载体。信息经过压缩之后放到专用流服务器上，让浏览者一边下载一边观看或收听")]),v._v(" "),_("p",[_("strong",[v._v("24.多媒体计算机硬件系统：")]),v._v(" 音频卡，视频卡，光盘驱动器，扫描仪，光学字符阅读器，触摸屏，数字化仪，操纵杆，绘图仪、投影仪和激光视盘播放器")]),v._v(" "),_("p",[v._v("25.多媒体计算机软件系统： 多媒体操作系统，多媒体应用软件的开发工具，多媒体应用软 件")])])}),[],!1,null,null,null);_.default=r.exports}}]);