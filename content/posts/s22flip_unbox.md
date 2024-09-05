---
title: CAT S22 Flipの開封
created_at: 2023-04-15
changed_at: 2024-09-05
tags:
- Android
- ガラホ (Dumb Phone)
- タフネス (Rugged Device)
- 開封 (Unboxing)
- アメリカ (Experience in The U.S.)
---
![S22 Flip](https://i.imgur.com/uZvJMlE.jpg)<br>
お久しぶりです。現在アメリカに留学中で、「これだけは買って帰りたい！」と考えていたガラホがあったので今回は開封とセットアップ、ファーストインプレッションで詳細レビューはまた後日したいと思います。

# スペック
- 製造元: Bullitt Mobile Ltd.
- SoC: Qualcomm 215
- RAM: 2GB
- ストレージ: 16GB eMMC
- ディスプレイ: 640x480 IPS (60Hz)
- OS: Android 11 R
- カメラ
  - メイン:5MP(GC5035)
  - インカメラ:2MP(GC02M2)
- 対応周波数
  - 4G:1/2/3/4/5/7/12/13/20/25/26/28/38/39/40/41/66/71
  - 3G:1/2/4/5/8/BC0/BC1/BC10
  - GSM:850/900/1,800/1,900 <br>
# 購入した動機
以前からPanasonic FZ-X1やUMIDIGI BISON X10Proといったタフネス機は度々使ってきたという点で、発表当初からかなり関心を寄せていた機種でした。<br>
また、true move Hのtrue SMART4G 3.5 HybridやauのGRATINA 4G KYF31などガラホも度々使っていたのでその流れでもあります。<br>
今回eBayにて送料無料で$74.99で購入しました。初めてのeBayでしたが特に戸惑うことなく利用できました。しかし円安きつい...

# 開封
## 箱
本体がまぁまぁ大きいので、箱もすこし大きめです。<br>
![Box_out](https://i.imgur.com/CZuL852.jpg)
![Box_in](https://i.imgur.com/J7OqHLB.jpg)<br>
新品未使用のはずですが、製造年月日には2021年11月12日とありかなり長く在庫としてあったためか、目視ではあまり気づきませんでしたが写真で見ると埃が目立ちます。
## 同梱物
![included](https://i.imgur.com/sETk3sl.jpg)<br>
同梱物はいたって普通で、<br>
- クイックスタートガイド
- 注意書き
- ACアダプタ
- USB-A to Cケーブル
- USB-C 3.5mmオーディオジャック変換ケーブル
- バッテリー (2,000mAh) <br>
となっています。バッテリー着脱式はガラホでは珍しくありませんが、ずっとスマホを触っていると逆に新鮮ですね。最近はオミットされがちなACアダプタもしっかり同梱されています。
![battery](https://i.imgur.com/24uDiNC.jpg)
![wallcharger](https://i.imgur.com/GczB0dV.jpg)
![audio cable](https://i.imgur.com/IqQTICP.png)<br>
ちなみにこの変換ケーブルはDACを内蔵しないアナログ結線のため、Pixelやarrows 5Gなどのアナログ結線非対応機種では使用できません。
## 起動
![Cover](https://i.imgur.com/jwMcmHW.jpg)<br>
背面パネルは日本でauから販売されているタフネスガラホのG'z one TYPE-XXと同じでネジを回す形です。<br>
それでは早速起動します。<br>
![Brand Logo](https://i.imgur.com/vRgy1lL.jpg)
![Person](https://i.imgur.com/K6QnFBB.jpg)
![Career Logo](https://i.imgur.com/PBbwqaV.jpg)<br>
これまで様々な機種を触ってきましたが、人物画が出てくるものは初めてでかなり新鮮です。
## 初期設定
ガラホとはいえ、日本で一般に売られているものと違い普通にGMSが入っているためあまり変わり映えしません。<br>
### 言語
![Language](https://i.imgur.com/kIMiatK.jpg)<br>
アメリカのため、英語はもちろんのこと、スペイン語やフランス語もあります。日本語がここにはありませんが、設定終了後、ADBで<br>
```
    adb shell settings put system system_locales ja-jp
    adb reboot
```
再起動後、独自実装を除きほとんどの項目が日本語に変わっています。<br>
![JPN_1](https://i.imgur.com/xkfVYa9.png)
![JPN_2](https://i.imgur.com/ut8KHBR.png)<br>
### アップデート
別のスマホでQRコードを表示してWi-Fiに接続したところ、アップデートがあったため更新します。いやー、しかしかっこいい！！！！<br>
![Update](https://i.imgur.com/LhgP982.jpg)<br>

### データ移行
今はデータ移行もスマホを近づけるだけで終わって便利です。特にガラホの場合Googleアカウントをテンキーや、この機種はスマホのように画面をタッチして入力もできますが、それでも小さくて入力しづらいのでありがたいです。いる情報を選んでサクッと移行です。<br>
![Migration](https://i.imgur.com/kultKdQ.jpg)
### 実は
![Bullitt](https://i.imgur.com/MAajszs.jpg)<br>
重機メーカのCATのブランド名を冠していますが、実はイギリスBullitt社のライセンス商品です。しかしその名に恥じぬよう、IP68やMIL-SPEC 810Hに加え、石油プラントのような発火や爆発の恐れがある危険区域での使用にも耐えるNon-Incendive Class I Div2, Group A-D, T4の防爆認証も取得しています。<br>
以前使用していたFZ-X1すら防爆認証は取得していないモデルだったので個人的に防爆端末は初です。

# ファーストインプレッション
ゴツゴツした筐体がいかにもタフネス機という感じがします。キーの押し心地もカチカチとしていて、KYF31やSMART 4G 3.5Hybridとはまた違った感じがします。<br>
Qualcomm 215で、210まではついていたSnapdragonを剥奪されています。日本でもG'z one Type-XXなどのガラホの他にモバイルWi-Fiルータなどに使われているものです。非常に非力なチップで、セットアップ時に大量のアプリをインストールしているとアツアツになりますが、チューニングがしっかりしているのかかなり頑張っている印象を受けます。<br>
現状で気になる点と言えば、<br>
- Wi-Fi 11acには非対応
- ポゴピンから充電するための充電器がどこを探しても売っていない
- ストラップホールがない<br>
の３点です。ポゴピンの充電器はあれば実用性も上がって所有感までも上がるため販売して欲しいと感じました。<br>
## 写真
![Qualcomm 215](https://i.imgur.com/3M3v7hZ.png)<br>
Snapdragonじゃないけどね...<br>
![Network Unlocked](https://i.imgur.com/dArir1K.png)<br>
販売ページにはSIMロックがかかっているとありましたが解除されていました。適当なSIMを突っ込んだところロックされている様子もありません。ラッキー！<br>
![Charge Pin](https://i.imgur.com/kSfJT77.jpg)<br>
専用充電器お待ちしてます。<br>
![GalaxyCore](https://i.imgur.com/rj5Xmf7.png)<br>
カメラはインとアウト、どちらも中国GalaxyCore製です。<br>

# まとめ
2年ほどずっと欲しかった端末が手に入り嬉しいです。テンキー入力が慣れませんが、しっかり使ってまたレビューしたいと思います。<br>
<iframe src="https://www.youtube.com/embed/jGCiLYh99Fo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>