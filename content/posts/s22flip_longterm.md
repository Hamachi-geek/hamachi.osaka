---
title: CAT S22 Flip 長期使用レビュー
created_at: 2023-11-08
tags:
- Android
- ガラホ (Dumb Phone)
- タフネス (Rugged Device)
- レビュー (Review)
---
 <img src="https://i.imgur.com/uZvJMlE.jpg" width="500px"><br>
お久しぶりです。はまちです。早いもので７月に帰国してから4ヶ月ほどが経ち、CAT S22 Flipを使用開始してからも半年以上が経ちました。<br>今回はそれを長期使用して、どのように使用しているか、いいと思った点・気になった点についてお話しします


# スペック
 - Qualcomm 215
 - RAM:2GB
 - ROM:16GB eMMC
 - Android 11 R
 - 2.5インチ 640x480 IPS (60Hz)
 - カメラ
   - メイン:5MP(GC5035)
   - イン:2MP(GC02M2)
 - 2,000mAh

# その後
## 日本語入力
日本語入力はnicoWnnG for SHFを使うことで可能です。しかし立ち上がりがかなり遅く、２〜４秒ほどかかります。<br>注意としてはPlay Storeで配信されているものは起動しません。

## SIM
謎に多い対応周波数のおかげで一応４キャリアをつかめました。やはり対応周波数の多さは正義ですね。VoLTEやSMSも確認し、楽天モバイルはLTE Band26を掴むことでパートナーエリアにも繋がり、Rakuten Linkの発着信も問題ありません。<br>ただドコモのBand19とMFBIするBand26は掴まず、Band28を掴みます。SoftBankも同様です。プラチナバンドを掴んでいること自体は事実ですが、基地局数がどうしてもBand28はまだまだ少なく、5Gへの転用も進んでいる周波数なのでこれにだけ頼るのはあまりよくありません。<br><img src="https://i.imgur.com/VzOU6GY.png" width="150px"><br> <span style="font-size: 10px;">令和４年度 携帯電話及び全国BWAに係る電波の利用状況調査の調査結果の概要について</span> [^1]<br>そこで検証した結果、Band26に加え、Band41もT-Mobileと共通なためかauが一番相性がいいことが判明しました。おそらくBand18はBand19と同じ800MHz帯でもBand26寄りのため繋がるのかと思います。<img src="https://i.imgur.com/ZJXMk8T.png" width="400px"><br><span style="font-size: 10px;">36101-i30_s00-07</span> [^2]<br>私はpovo 2.0のSIMを入れてバイト先の連絡先として使っています。それ(とタフネスなのが)が「お仕事携帯」の所以です。

# 気に入った点
## デザイン
このゴツゴツしていて、それでいて余計な曲線や起伏といった無駄な造形をしない、シンプルでスクエアなデザインは非常にクールです。見るからにタフなデザインは傷がついても、それはそれで使用美として機能するため扱いやすさや使う喜びにも直結します。カメラや背面ディスプレイを傷つけないための適度な窪みや、大音量スピーカーとセルラー通信用の大きなメインアンテナを収容する本体下部の顎の部分もこの機種を特徴づける大切な要素です。機能にデザインが適応しているとても良いデザインです。
## 優秀なチューニング
この機種はSoCにQM215という、G’z one TYPE-XXのような機能を絞った「ガラホ」や、クラウドSIM用Wi-Fiルーターに採用されるような非常に非力なものを採用しており、その上RAMは2GBしかありませんが、CellMapperでマップを表示したり、Firefoxでmisskey.ioを閲覧したりそこで投稿したりといったことをしましたが、もたつくことなく快適に使用できます。Android Goであることに加え、安定感も非常に高く、発熱も抑えられていることからチューニング（最適化）が成功しているためだと感じます。<br>Snapdragon 425と構成が非常によく似たSoCのため、設計が枯れたそれをベースにしたことも安定感に寄与したのでないでしょうか。Tensor Pixelもここまでちゃんと動くようになってくれればいいのですが…<br>アンテナ配置は本体下部にセルラー通信用メインアンテナ、天板の「CAT」ロゴの部分にLTE用ダイバシティアンテナが外向きに配置されています。開いて使った際に特等席となるここにダイバシティアンテナを配置することで、メインアンテナを強力に補助して安定した通信を実現しています。通常のスマホより手や頭などの遮蔽物が覆い被さりづらいため、これはフリップフォンの強みと感じます。
## タッチパネル
どうしても十字キーだけでは操作できない場合のソリューションはこれまで様々考えられてきました。KYF31のようにキーパッドをトラックパッドとして使うもの、G’z one TYPE-XXやtrue Super4のようにポインタを十字―キーで操作するものなどです。<br>そんな中、この機種ではタッチパネルが採用されました。タッチパネルを採用した例はtrue SMART4G 3.5 HybridやMode1 Retroなどがありますが、全体を見ればかなりレアです。<br>結局採用するOSがAndroidである以上避けられないことや、キーパッドをトラックパッドにするものも十字キーでポインタを動かすものもUXがトリッキーすぎるので、もっとこうする機種が多くてもいいような気はしますが、メーカーからはわざわざテンキー付きの機種を選ぶ客層との相性が悪いと考えられているのか、あまり多くない印象です。<br>マルチタッチは５点まで対応で、2.8インチであることを考えれば十分すぎます。流石にこれで音ゲーをする人はいないので…<br>なお背面ディスプレイはタッチ非対応なので、OPPO Find NシリーズやMotorola Razrシリーズのようにリッチに活用することはできません。
## 強力なセルラー通信
あまり海外ローミングを考慮するコンセプトの機種ではないですが、北米バンド以外も数多く対応しています。auに関してはBand 1や3だけではなく26や28で幅広いエリアで通信するとともに、Band41も対応しているためより快適に通信することができます。この豊富な対応周波数のおかげで、難波や梅田の混雑した中でも、和歌山の山中でもパワフルに通信できました。ハンドオーバーもかなり器用にこなします。<br>対応機種が思いのほか限られる楽天モバイルでさえVoLTEやSMSが使用可能な点は驚きました。<br>SoftBankやドコモに関しては先述した通り、問題なく通信できますがBand28に頼ることになるので、今後どうなるかが不透明です。特にSoftBankはLTE Band28を減らしてどんどんn28へと転用しているので…
## タフ
なんといってもこの機種の強みはこれです。<br>防水防塵に加えて対衝撃まであることは非常に扱いやすく良いと感じます。使用していて1.5mほどの高さからコンクリートに落下させてしまったときや、こちらへ一直線に向かってくるアシナガバチから逃げる際にアスファルトへ投げつけた際も無事でした。<br>また、この機種が誇る高い耐久性は先述した傷も使用美になるという、この機種の美しさを構成する要素の一つではないかと思います。

# 気になった点
## キーパッドのチャタリング
これがこの機種最大の欠点です。特に画面ロック時に気になります。<br>9・6・3・0で起こりやすいため、この列に何か問題があるのでしょうか？
## キーパッドLEDのオンオフのしづらさ
わざわざこれのオンオフ切り替えのために「設定>ディスプレイ>詳細設定>Keyboard light」をすることになっていて、非常にアホくさいです。<br>クイック設定パネルにもそのような項目はなく、ウィジェットにもないため、メーカーとしてはあまり頻繁なオンオフは想定されていない印象です。
## エリアメールを受信しない
アメリカで使用していた際は問題なく受信していましたが、日本では受信できません。<br>ETWSはLTEの標準技術で、その周りの実装もAOSPにあるはずですが…

# まとめ：クセが強いが魅力的な一台
キーのチャタリングやキーパッドのLEDオンオフのしにくさといった細々としたUI/UXの甘さはありますが、クールなデザインや強力なセルラー通信性能などの良い点も多くあります。eBayでSIMロック解除品が新品未使用で多く出回っているので一度試してみてください。

# 参考資料
[^1]: [令和４年度 携帯電話及び全国BWAに係る電波の利用状況調査の調査結果の概要について](https://www.soumu.go.jp/main_content/000859612.pdf)(最終アクセス日:2023年11月6日)<br>
[^2]: [36101-i30 (36101-i30_s00-07)](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=2411)(最終アクセス日:2023年11月6日)<br>

[AGM M5で日本語入力が出来た話](https://note.com/ytjvdcm/n/n11873e6b6a02)(最終アクセス日:2023年11月8日)<br>
[FCC ZL5S22F Internal Photo](https://fcc.report/FCC-ID/ZL5S22F/5291484.pdf)(最終アクセス日:2023年11月7日)