module.exports = {
  '100': {
    Name: 'Continue(継続)',
    speechName: 'コンティニュー(継続)',
    Desc: 'クライアントはリクエストを継続できます。サーバーがリクエストの最初の部分を受け取り、まだ拒否していないことを示します。 例えば、クライアントがExpect:100-continueヘッダをつけたリクエストを行い、それをサーバーが受理した場合に返されます。',
    speechDesc: 'クライアントはリクエストを継続できます。サーバーがリクエストの最初の部分を受け取り、まだ拒否していないことを示します。 例えば、クライアントがイクスペクト・100・コンティニューヘッダをつけたリクエストを行い、それをサーバーが受理した場合に返されます。',
  },
  '101': {
    Name: 'Switching Protocols(プロトコル切替え)',
    speechName: 'スイッチング・プロトコルズ(プロトコル切替え)',
    Desc: 'サーバーはリクエストを理解し、遂行のためにプロトコルの切替えを要求している場合に返されます。',
  },
  '102': {
    Name: 'Processing(処理中)',
    speechName: 'プロセッシング(処理中)',
    Desc: 'WebDAVの拡張ステータスコードです。処理が継続されて行われていることを示しています。',
  },
  '103': {
    Name: 'Early Hints(早期のヒント)',
    speechName: 'アーリー・ヒンツ(早期のヒント)',
    Desc: '最終的なレスポンスヘッダが確定する前に、予想されるヘッダを伝達します。Linkレスポンスヘッダと組み合わせて、関連するリソースの先読み・プッシュ配信に利用することが想定されています。',
  },
  '200': {
    Name: 'OK',
    speechName: 'OK',
    Desc: 'リクエストは成功し、レスポンスとともに要求に応じた情報が返されます。ブラウザでページが正しく表示された場合は、ほとんどがこのステータスコードを返しています。',
  },
  '201': {
    Name: 'Created(作成)',
    speechName: 'クリエイティッド(作成)',
    Desc: 'リクエストは完了し、新たに作成されたリソースのURIが返されます。例えば、PUTメソッドでリソースを作成するリクエストを行ったとき、そのリクエストが完了した場合に返されます。',
  },
  '202': {
    Name: 'Accepted(受領)',
    speechName: 'アクセプティッド(受領)',
    Desc: 'リクエストは受理されたが処理は完了していないことを示しています。例えば、PUTメソッドでリソースを作成するリクエストを行ったとき、サーバーがリクエストを受理したものの、リソースの作成が完了していない場合に返されます。バッチ処理向けです。',
  },
  '203': {
    Name: 'Non-Authoritative Information(信頼できない情報)',
    speechName: 'ノン・オーソリテイティブ・インフォメーション(信頼できない情報)',
    Desc: 'オリジナルのデータではなく、ローカルやプロキシ等からの情報である場合に返されます。',
  },
  '204': {
    Name: 'No Content(内容なし)',
    speechName: 'ノー・コンテント(内容なし)',
    Desc: 'リクエストを受理したが、返すべきレスポンスエンティティが存在しない場合に返されます。例えば、POSTメソッドでフォームの内容を送信したが、ブラウザの画面を更新しない場合に返されます。',
  },
  '205': {
    Name: 'Reset Content(内容のリセット)',
    speechName: 'リセット・コンテント(内容のリセット)',
    Desc: 'リクエストを受理し、ユーザエージェントの画面をリセットする場合に返されます。例えば、POSTメソッドでフォームの内容を送信した後、ブラウザの画面を初期状態に戻す場合に返されます。',
  },
  '206': {
    Name: 'Partial Content(部分的内容)',
    speechName: 'パーシャル・コンテント(部分的内容)',
    Desc: '部分的GETリクエストを受理したときに、返されます。例えば、ダウンロードツール等で分割ダウンロードを行った場合や、レジュームを行った場合に返されます。',
  },
  '207': {
    Name: 'Multi-Status(複数のステータス)',
    speechName: 'マルチ・ステータス(複数のステータス)',
    Desc: 'WebDAVの拡張ステータスコードです。',
  },
  '208': {
    Name: 'Already Reported(既に報告)',
    speechName: 'オールレディー・レポーティッド(既に報告)',
    Desc: 'WebDAVの拡張ステータスコードです。',
  },
  '226': {
    Name: 'IM Used(IM使用)',
    speechName: 'I M ユーズド(IM使用)',
    Desc: 'Delta Encoding in HTTPの拡張ステータスコードです。',
    speechDesc: 'デルタ・エンコーディング・イン・HTTPの拡張ステータスコードです。',
  },
  '300': {
    Name: 'Multiple Choices(複数の選択)',
    speechName: 'マルチプル・チョイシズ(複数の選択)',
    Desc: 'リクエストしたリソースが複数存在し、ユーザやユーザーエージェントに選択肢を提示するときに返されます。',
  },
  '301': {
    Name: 'Moved Permanently(恒久的に移動した)',
    speechName: 'ムーブド・パーマネントリー(恒久的に移動した)',
    Desc: 'リクエストしたリソースが恒久的に移動されているときに返されます。Location:ヘッダに移動先のURLが示されます。例えば、ファイルではなくディレクトリに対応するURLの末尾に/を書かずにアクセスした場合に返されます。',
    speechDesc: 'リクエストしたリソースが恒久的に移動されているときに返されます。ロケーション・ヘッダに移動先のURLが示されます。例えば、ファイルではなくディレクトリに対応するURLの末尾にスラッシュを書かずにアクセスした場合に返されます。',
  },
  '302': {
    Name: 'Found(発見した)',
    speechName: 'ファウンド(発見した)',
    Desc: 'リクエストしたリソースが一時的に移動されているときに返されます。Location:ヘッダに移動先のURLが示されます。元々は、Moved Temporarily(一時的に移動)で、本来はリクエストしたリソースが一時的にそのURLに存在せず、別のURLにある場合に使用するステータスコードでした。しかし、例えば掲示板やWikiなどで投稿後にブラウザを他のURLに転送したいときにもこのコードが使用されるようになったため、302はFoundになり、新たに303、307が作成されました。',
    speechDesc: 'リクエストしたリソースが一時的に移動されているときに返されます。ロケーション・ヘッダに移動先のURLが示されます。元々は、ムーブド・テンポラリリー(一時的に移動)で、本来はリクエストしたリソースが一時的にそのURLに存在せず、別のURLにある場合に使用するステータスコードでした。しかし、例えば掲示板やWikiなどで投稿後にブラウザを他のURLに転送したいときにもこのコードが使用されるようになったため、302はファウンドになり、新たに303、307が作成されました。',
  },
  '303': {
    Name: 'See Other(他を参照せよ)',
    speechName: 'シー・アザー(他を参照せよ)',
    Desc: 'リクエストに対するレスポンスが他のURLに存在するときに返されます。Location:ヘッダに移動先のURLが示されている。リクエストしたリソースは確かにそのURLにあるが、他のリソースをもってレスポンスとするような場合に使用します。302の説明で挙げたような、掲示板やWikiなどで投稿後にブラウザを他のURLに転送したいときに使われるべきコードとして導入されました。',
    speechDesc: 'リクエストに対するレスポンスが他のURLに存在するときに返されます。ロケーション・ヘッダに移動先のURLが示されている。リクエストしたリソースは確かにそのURLにあるが、他のリソースをもってレスポンスとするような場合に使用します。302の説明で挙げたような、掲示板やWikiなどで投稿後にブラウザを他のURLに転送したいときに使われるべきコードとして導入されました。',
  },
  '304': {
    Name: 'Not Modified(未更新)',
    speechName: 'ノット・モディファイド(未更新)',
    Desc: 'リクエストしたリソースは更新されていないことを示します。例えば、If-Modified-Since:ヘッダを使用したリクエストを行い、そのヘッダに示された時間以降に更新がなかった場合に返されます。',
    speechDesc: 'リクエストしたリソースは更新されていないことを示します。例えば、イフ・モディファイド・シンス・ヘッダを使用したリクエストを行い、そのヘッダに示された時間以降に更新がなかった場合に返されます。',
  },
  '305': {
    Name: 'Use Proxy(プロキシを使用せよ)',
    speechName: 'ユーズ・プロキシー(プロキシを使用せよ)',
    Desc: 'レスポンスのLocation:ヘッダに示されるプロキシを使用してリクエストを行わなければならないことを示しています。',
    speechDesc: 'レスポンスのロケーション・ヘッダに示されるプロキシを使用してリクエストを行わなければならないことを示しています。',
  },
  '306': {
    Name: '(Unused)(未使用）',
    speechName: 'アンユーズド(未使用）',
    Desc: '将来のために予約されています。ステータスコードは前のバージョンの仕様書では使われていましたが、もはや使われておらず、将来のために予約されているとされています。 検討段階では、「Switch Proxy」というステータスコードが提案されていました。',
    speechDesc: '将来のために予約されています。ステータスコードは前のバージョンの仕様書では使われていましたが、もはや使われておらず、将来のために予約されているとされています。 検討段階では、「スイッチ・プロキシー」というステータスコードが提案されていました。',
  },
  '307': {
    Name: 'Temporary Redirect(一時的リダイレクト)',
    speechName: 'テンポラリー・リダイレクト(一時的リダイレクト)',
    Desc: 'リクエストしたリソースは一時的に移動されているときに返されます。Location:ヘッダに移動先のURLが示されます。302の規格外な使用法が横行したため、302の本来の使用法を改めて定義したものです。',
    speechDesc: 'リクエストしたリソースは一時的に移動されているときに返されます。ロケーション・ヘッダに移動先のURLが示されます。302の規格外な使用法が横行したため、302の本来の使用法を改めて定義したものです。',
  },
  '308': {
    Name: 'Permanent Redirect(恒久的なリダイレクト)',
    speechName: 'パーマネント・リダイレクト(恒久的なリダイレクト)',
    Desc: '',
  },
  '400': {
    Name: 'Bad Request(リクエスト不正)',
    speechName: 'バッド・リクエスト(リクエスト不正)',
    Desc: '定義されていないメソッドを使うなど、クライアントのリクエストがおかしい場合に返されます。',
  },
  '401': {
    Name: 'Unauthorized(認証が必要)',
    speechName: 'アンオーサライズド(認証が必要)',
    Desc: 'Basic認証やDigest認証などを行うときに使用されます。たいていのブラウザはこのステータスを受け取ると、認証ダイアログを表示します。',
    speechDesc: 'ベーシック認証やダイジェスト認証などを行うときに使用されます。たいていのブラウザはこのステータスを受け取ると、認証ダイアログを表示します。',
  },
  '402': {
    Name: 'Payment Required(支払いが必要)',
    speechName: 'ペイメント・リクワイヤード(支払いが必要)',
    Desc: '現在は実装されておらず、将来のために予約されているとされています。',
  },
  '403': {
    Name: 'Forbidden(禁止)',
    speechName: 'フォービドゥン(禁止)',
    Desc: 'リソースにアクセスすることを拒否されています。リクエストはしたが処理できないという意味です。アクセス権がない場合や、ホストがアクセス禁止処分を受けた場合などに返されます。例えば、 社内（イントラネット）からのみアクセスできるページに社外からアクセスしようとした場合などに返されます。',
  },
  '404': {
    Name: 'Not Found(未検出)',
    speechName: 'ノット・ファウンド(未検出)',
    Desc: 'リソースが見つかりませんでした。単に、アクセス権がない場合などにも使用されます。',
  },
  '405': {
    Name: 'Method Not Allowed(許可されていないメソッド)',
    speechName: 'メソッド・ノット・アロウド(許可されていないメソッド)',
    Desc: '許可されていないメソッドを使用しようとした場合に返されます。例えば、POSTメソッドの使用が許されていない場所で、POSTメソッドを使用した場合に返されます。',
  },
  '406': {
    Name: 'Not Acceptable(受理できない)',
    speechName: 'ノット・アクセプタブル(受理できない)',
    Desc: 'Accept関連のヘッダに受理できない内容が含まれている場合に返されます。例えば、サーバーは英語か日本語しか受け付けられないが、リクエストのAccept-Language:ヘッダにzh（中国語）しか含まれていなかった場合や、サーバーはapplication/pdfを送信したかったが、リクエストのAccept:ヘッダにapplication/pdfが含まれていなかった場合や、サーバーはUTF-8の文章を送信したかったが、リクエストのAccept-Charset:ヘッダには、UTF-8が含まれていなかった場合などです。',
    speechDesc: 'アクセプト関連のヘッダに受理できない内容が含まれている場合に返されます。例えば、サーバーは英語か日本語しか受け付けられないが、リクエストのアクセプトランゲージヘッダにゼット・エイチ（中国語）しか含まれていなかった場合や、サーバーはアプリケーション・PDFを送信したかったが、リクエストのアクセプト・ヘッダにアプリケーション・PDFが含まれていなかった場合や、サーバーはUTF-8の文章を送信したかったが、リクエストのアクセプト・チャーセット・ヘッダには、UTF-8が含まれていなかった場合などです。',
  },
  '407': {
    Name: 'Proxy Authentication Required(プロキシ認証が必要である)',
    speechName: 'プロキシー・オーセンティケーション・リクワイヤード(プロキシ認証が必要である)',
    Desc: 'プロキシの認証が必要な場合に返されます。',
  },
  '408': {
    Name: 'Request Timeout(リクエストタイムアウト)',
    speechName: 'リクエストタイムアウト',
    Desc: 'リクエストが時間以内に完了していない場合に返されます。',
  },
  '409': {
    Name: 'Conflict(競合)',
    speechName: 'コンフリクト(競合)',
    Desc: '要求は現在のリソースと競合するので完了出来ないということを示しています。',
  },
  '410': {
    Name: 'Gone(消滅した)',
    speechName: 'ゴーン(消滅した)',
    Desc: 'リソースは恒久的に移動・消滅し、どこに行ったかもわからないということを示しています。404 Not Foundと似ているが、こちらは二度と復活しない場合に使われます。ただし、このコードは特別に設定しないと提示できないため、リソースが消滅しても404コードを出すサイトが多いです。',
    speechDesc: 'リソースは恒久的に移動・消滅し、どこに行ったかもわからないということを示しています。404・ノット・ファウンドと似ているが、こちらは二度と復活しない場合に使われます。ただし、このコードは特別に設定しないと提示できないため、リソースが消滅しても404コードを出すサイトが多いです。',
  },
  '411': {
    Name: 'Length Required(長さが必要）',
    speechName: 'レングス・リクワイヤード(長さが必要）',
    Desc: 'Content-Length ヘッダがないのでサーバーがアクセスを拒否した場合に返されます。',
    speechDesc: 'コンテント・レングス・ヘッダがないのでサーバーがアクセスを拒否した場合に返されます。',
  },
  '412': {
    Name: 'Precondition Failed(前提条件で失敗した)',
    speechName: 'プリコンディション・フェイルド(前提条件で失敗した)',
    Desc: '前提条件が偽だった場合に返されます。例えば、リクエストのIf-Unmodified-Since:ヘッダに書いた時刻より後に更新があった場合に返されます。',
    speechDesc: '前提条件が偽だった場合に返されます。例えば、リクエストのイフ・アンモディファイド・シンス・ヘッダに書いた時刻より後に更新があった場合に返されます。',
  },
  '413': {
    Name: 'Payload Too Large(ペイロードが大きすぎる)',
    speechName: 'ペイロード・トゥー・ラージ(ペイロードが大きすぎる)',
    Desc: 'RFC 7231 で定義されており、リクエストエンティティがサーバーの許容範囲を超えている場合に返されます。例えば、アップローダの上限を超えたデータを送信しようとした場合です。RFC 2616以前では、Request Entity Too Large（リクエストエンティティが大きすぎる）と定められていました。',
    speechDesc: 'RFC 7231 で定義されており、リクエストエンティティがサーバーの許容範囲を超えている場合に返されます。例えば、アップローダの上限を超えたデータを送信しようとした場合です。RFC 2616以前では、リクエスト・エンティティ・トゥー・ラージ（リクエストエンティティが大きすぎる）と定められていました。',
  },
  '414': {
    Name: 'URI Too Long(URIが大きすぎる)',
    speechName: 'URI・トゥー・ロング(URIが大きすぎる)',
    Desc: 'RFC 7231 で定義されており、URIが長過ぎるのでサーバーが処理を拒否した場合に返されます。例えば、画像データのような大きなデータをGETメソッドで送ろうとし、URIが何10kBにもなった場合に返されます（上限はサーバーに依存する）。 RFC 2616以前では、Request-URI Too Long（リクエストURIが大きすぎる）と定められていました。',
    speechDesc: 'RFC 7231 で定義されており、URIが長過ぎるのでサーバーが処理を拒否した場合に返されます。例えば、画像データのような大きなデータをGETメソッドで送ろうとし、URIが何10kBにもなった場合に返されます。 RFC 2616以前では、リクエスト・URI・トゥー・ロング（リクエストURIが大きすぎる）と定められていました。',
  },
  '415': {
    Name: 'Unsupported Media Type(サポートしていないメディアタイプ)',
    speechName: 'アンサポーティッド・メディア・タイプ(サポートしていないメディアタイプ)',
    Desc: '指定されたメディアタイプがサーバーでサポートされていない場合に返されます。',
  },
  '416': {
    Name: 'Range Not Satisfiable(レンジは範囲外にある)',
    speechName: 'レンジ・ノット・サティスファイアブル(レンジは範囲外にある)',
    Desc: 'RFC 7233で定義されており、実リソースのサイズを超えるデータを要求した場合に返されます。たとえば、リソースのサイズが1024Byteしかないのに、1025Byteを取得しようとした場合などです。RFC 2616以前では、Requested Range Not Satisfiable（リクエストしたレンジは範囲外にある）と定められていました。',
    speechDesc: 'RFC 7233で定義されており、実リソースのサイズを超えるデータを要求した場合に返されます。たとえば、リソースのサイズが1024バイトしかないのに、1025バイトを取得しようとした場合などです。RFC 2616以前では、リクエスト・レンジ・ノット・サティスファイアブル（リクエストしたレンジは範囲外にある）と定められていました。',
  },
  '417': {
    Name: 'Expectation Failed(Expectヘッダによる拡張が失敗)',
    speechName: 'イクスペクテーション・フェイルド(イクスペクトヘッダによる拡張が失敗)',
    Desc: 'その拡張はレスポンスできないという場合に返されます。またはプロキシサーバーは、次に到達するサーバーがレスポンスできないと判断した場合に返されます。具体例として、Expect:ヘッダに100-continue以外の変なものを入れた場合や、そもそもサーバーが100 Continueを扱えない場合などです。',
    speechDesc: 'その拡張はレスポンスできないという場合に返されます。またはプロキシサーバーは、次に到達するサーバーがレスポンスできないと判断した場合に返されます。具体例として、イクスペクト・ヘッダに100コンティニュー以外の変なものを入れた場合や、そもそもサーバーが100コンティニューを扱えない場合などです。',
  },
  '418': {
    Name: "I'm a teapot(私はティーポット)",
    speechName: "アイム・ア・ティーポット(私はティーポット)",
    Desc: 'HTCPCP/1.0の拡張ステータスコードです。ティーポットにコーヒーを淹れさせようとして、拒否された場合に返すとされる、ジョークのコードです。',
  },
  '421': {
    Name: 'Misdirected Request(誤ったリクエスト)',
    speechName: 'ミスディレクティッド・リクエスト(誤ったリクエスト)',
    Desc: 'RFC 7540で定義されています。',
  },
  '422': {
    Name: 'Unprocessable Entity(処理できないエンティティ)',
    speechName: 'アンプロセッサブル・エンティティ(処理できないエンティティ)',
    Desc: 'WebDAVの拡張ステータスコードです。',
  },
  '423': {
    Name: 'Locked(ロックされている)',
    speechName: 'ロックド(ロックされている)',
    Desc: 'WebDAVの拡張ステータスコードです。リクエストしたリソースがロックされている場合に返されます。',
  },
  '424': {
    Name: 'Failed Dependency(依存関係で失敗)',
    speechName: 'フェイルド・ディペンデンシー(依存関係で失敗)',
    Desc: 'WebDAVの拡張ステータスコードです。',
  },
  '426': {
    Name: 'Upgrade Required(アップグレード要求)',
    speechName: 'アップグレード・リクワイヤード(アップグレード要求)',
    Desc: 'Upgrading to TLS Within HTTP/1.1の拡張ステータスコードです。',
    speechDesc: 'アップグレーディング・トゥ・TLS・ウィズィン・HTTP1.1の拡張ステータスコードです。',
  },
  '451': {
    Name: 'Unavailable For Legal Reasons(法的理由により利用不可)',
    speechName: 'アンアベイラブル・フォー・リーガル・リーズンズ(法的理由により利用不可)',
    Desc: '403 Forbiddenから派生したステータスコードです。',
  },
  '500': {
    Name: 'Internal Server Error(サーバー内部エラー)',
    speechName: 'インターナル・サーバー・エラー(サーバー内部エラー)',
    Desc: 'サーバー内部にエラーが発生した場合に返されます。例えば、CGIとして動作させているプログラムに文法エラーがあったり、設定に誤りがあった場合などです。',
  },
  '501': {
    Name: 'Not Implemented(実装されていない)',
    speechName: 'ノット・インプルメンティッド(実装されていない)',
    Desc: '実装されていないメソッドを使用した場合に返されます。例えば、WebDAVが実装されていないサーバーに対してWebDAVで使用するメソッド（MOVEやCOPY）を使用した場合などです。。',
  },
  '502': {
    Name: 'Bad Gateway(不正なゲートウェイ)',
    speechName: 'バッド・ゲートウェイ(不正なゲートウェイ)',
    Desc: 'ゲートウェイ・プロキシサーバーは不正な要求を受け取り、これを拒否した場合に返されます。',
  },
  '503': {
    Name: 'Service Unavailable(サービス利用不可)',
    speechName: 'サービス・アンアベイラブル(サービス利用不可)',
    Desc: 'サービスが一時的に過負荷やメンテナンスで使用不可能である場合に返されます。例えば、アクセスが殺到して処理不能に陥った場合などです。',
  },
  '504': {
    Name: 'Gateway Timeout',
    speechName: 'ゲートウェイ・タイムアウト',
    Desc: 'ゲートウェイ・プロキシサーバーはURIから推測されるサーバーからの適切なレスポンスがなくタイムアウトした場合に返されます。',
  },
  '505': {
    Name: 'HTTP Version Not Supported(サポートしていないHTTPバージョン)',
    speechName: 'HTTP・バージョン・ノット・サポーティッド(サポートしていないHTTPバージョン)',
    Desc: 'リクエストがサポートされていないHTTPバージョンである場合に返されます。',
  },
  '506': {
    Name: 'Variant Also Negotiates',
    speechName: 'バリアント・オルソ・ネゴシエイツ',
    Desc: 'Transparent Content Negotiation in HTTPで定義されている拡張ステータスコードです。',
    speechDesc: 'トランスペアレント・コンテント・ネゴシエーション・イン・HTTPで定義されている拡張ステータスコードです。',
  },
  '507': {
    Name: 'Insufficient Storage(容量不足)',
    speechName: 'インサフィシエント・ストレージ(容量不足)',
    Desc: 'WebDAVの拡張ステータスコードです。リクエストを処理するために必要なストレージの容量が足りない場合に返されます。',
  },
  '508': {
    Name: 'Loop Detected(ループを検出)',
    speechName: 'ループ・ディテクティッド(ループを検出)',
    Desc: 'WebDAVの拡張ステータスコードです。',
  },
  '509': {
    Name: 'Bandwidth Limit Exceeded(帯域超過)',
    speechName: 'バンド・ウィドゥス・リミット・エクスィーディッド(帯域超過)',
    Desc: 'そのサーバーに設定されている帯域幅（転送量）を使い切った場合に返されます。',
  },
  '510': {
    Name: 'Not Extended(拡張できない)',
    speechName: 'ノット・エクステンディッド(拡張できない)',
    Desc: 'HTTP Extension Frameworkで定義されている拡張ステータスコードです。拡張できない場合に返されます。',
    speechDesc: 'HTTP・エクステンション・フレームワークで定義されている拡張ステータスコードです。拡張できない場合に返されます。',
  },
  '511': {
    Name: 'Network Authentication Required(ネットワークに対する認証が必要)',
    speechName: 'ネットワーク・オーセンティケーション・リクワイヤード(ネットワークに対する認証が必要)',
    Desc: 'キャプティブポータルでの使用を意図しており、RFC 6585 で規定されています。',
  },
};