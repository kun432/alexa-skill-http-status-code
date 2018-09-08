module.exports = {
  '100': {
    Desc: 'Continue',
    LongDesc: 'クライアントはリクエストを継続できます。サーバがリクエストの最初の部分を受け取り、まだ拒否していないことを示します。 例として、クライアントがExpect 100 continueヘッダをつけたリクエストを行い、それをサーバが受理した場合に返されます。',
  },
  '101': {
    Desc: 'Switching Protocols',
    LongDesc: 'サーバはリクエストを理解し、遂行のためにプロトコルの切替えを要求している場合に返されます。',
  },
  '102': {
    Desc: 'Processing',
    LongDesc: 'WebDAVの拡張ステータスコードです。処理が継続されて行われていることを示しています。',
  },
  '103': {
    Desc: 'Early Hints',
    LongDesc: '最終的なレスポンスヘッダが確定する前に、予想されるヘッダを伝達します。Linkレスポンスヘッダと組み合わせて、関連するリソースの先読み・プッシュ配信に利用することが想定されています。',
  },
  '200': {
    Desc: 'OK',
    LongDesc: 'リクエストは成功し、レスポンスとともに要求に応じた情報が返されます。ブラウザでページが正しく表示された場合は、ほとんどがこのステータスコードを返しています。',
  },
  '201': {
    Desc: 'Created',
    LongDesc: 'リクエストは完了し、新たに作成されたリソースのURIが返されます。例えば、PUTメソッドでリソースを作成するリクエストを行ったとき、そのリクエストが完了した場合に返されます。',
  },
  '202': {
    Desc: 'Accepted',
    LongDesc: 'リクエストは受理されましたが、処理は完了していないことを示しています。例えば、PUTメソッドでリソースを作成するリクエストを行ったとき、サーバがリクエストを受理したものの、リソースの作成が完了していない場合に返されます。バッチ処理などで使用されます。',
  },
  '203': {
    Desc: 'Non-Authoritative Information',
    LongDesc: '信頼できない情報であることを示しています。オリジナルのデータではなく、ローカルやプロキシ等からの情報である場合に返されます。',
  },
  '204': {
    Desc: 'No Content',
    LongDesc: 'リクエストを受理したが、返すべきレスポンスエンティティが存在しない場合に返される。例えば、POSTメソッドでフォームの内容を送信したが、ブラウザの画面を更新しない場合に返されます。',
  },
  '205': {
    Desc: 'Reset Content',
    LongDesc: '内容のリセット。リクエストを受理し、ユーザエージェントの画面をリセットする場合に返される。例: POSTメソッドでフォームの内容を送信した後、ブラウザの画面を初期状態に戻す場合に返される。',
  },
  '206': {
    Desc: 'Partial Content',
    LongDesc: '部分的内容。部分的GETリクエストを受理したときに、返される。例: ダウンロードツール等で分割ダウンロードを行った場合や、レジュームを行った場合に返される。',
  },
  '207': {
    Desc: 'Multi - Status',
    LongDesc: '複数のステータス。WebDAVの拡張ステータスコード。',
  },
  '208': {
    Desc: 'Already Reported',
    LongDesc: '既に報告。WebDAVの拡張ステータスコード。',
  },
  '226': {
    Desc: 'IM Used',
    LongDesc: 'IM使用。Delta encoding in HTTPの拡張ステータスコード。',
  },
  '300': {
    Desc: 'Found',
    LongDesc: 'リクエストしたリソースが一時的に移動されているときに返される。Locationヘッダに移動先のURLが示されている。元々はMoved Temporarily、一時的に移動した、という意味であり、リクエストしたリソースが一時的にそのURLに存在せず、別のURLにある場合に使用するステータスコードでしたが、例えば掲示板やWikiなどで投稿後にブラウザを他のURLに転送したいときにもこのコードが使用されるようになったため、302はFoundになり、新たに303・307が作成されました。',
  },
  '301': {
    Desc: 'Moved Permanently',
    LongDesc: '恒久的に移動した。リクエストしたリソースが恒久的に移動されているときに返される。Location:ヘッダに移動先のURLが示されている。例としては、ファイルではなくディレクトリに対応するURLの末尾に/を書かずにアクセスした場合に返される。具体例として、http://www.w3.org/TR',
  },
  '302': {
    Desc: 'Found',
    LongDesc: '発見した。リクエストしたリソースが一時的に移動されているときに返される。Location:ヘッダに移動先のURLが示されている。元々はMoved Temporarily（一時的に移動した）で、本来はリクエストしたリソースが一時的にそのURLに存在せず、別のURLにある場合に使用するステータスコードであった。しかし、例えば掲示板やWikiなどで投稿後にブラウザを他のURLに転送したいときにもこのコードが使用されるようになったため、302はFoundになり、新たに303・307が作成された。',
  },
  '303': {
    Desc: 'See Other',
    LongDesc: '他を参照せよ。リクエストに対するレスポンスが他のURLに存在するときに返される。Location:ヘッダに移動先のURLが示されている。リクエストしたリソースは確かにそのURLにあるが、他のリソースをもってレスポンスとするような場合に使用する。302の説明で挙げたような、掲示板やWikiなどで投稿後にブラウザを他のURLに転送したいときに使われるべきコードとして導入された。',
  },
  '304': {
    Desc: 'Not Modified',
    LongDesc: '未更新。リクエストしたリソースは更新されていないことを示す。例として、 If-Modified-Since:ヘッダを使用したリクエストを行い、そのヘッダに示された時間以降に更新がなかった場合に返される。',
  },
  '305': {
    Desc: 'Use Proxy',
    LongDesc: 'プロキシを使用せよ。レスポンスのLocation:ヘッダに示されるプロキシを使用してリクエストを行わなければならないことを示す。',
  },
  '306': {
    Desc: '(Unused)',
    LongDesc: '将来のために予約されている。ステータスコードは前のバージョンの仕様書では使われていたが、もはや使われておらず、将来のために予約されているとされる。 検討段階では、「Switch Proxy」というステータスコードが提案されていた。',
  },
  '307': {
    Desc: 'Temporary Redirect',
    LongDesc: '一時的リダイレクト。リクエストしたリソースは一時的に移動されているときに返される。Location:ヘッダに移動先のURLが示されている。302の規格外な使用法が横行したため、302の本来の使用法を改めて定義したもの。',
  },
  '308': {
    Desc: 'Permanent Redirect',
    LongDesc: '恒久的リダイレクト。',
  },
  '400': {
    Desc: 'Bad Request',
    LongDesc: 'リクエストが不正である。定義されていないメソッドを使うなど、クライアントのリクエストがおかしい場合に返される。',
  },
  '401': {
    Desc: 'Unauthorized',
    LongDesc: '認証が必要である。Basic認証やDigest認証などを行うときに使用される。たいていのブラウザはこのステータスを受け取ると、認証ダイアログを表示する。',
  },
  '402': {
    Desc: 'Payment Required',
    LongDesc: '支払いが必要である。現在は実装されておらず、将来のために予約されているとされる。',
  },
  '403': {
    Desc: 'Forbidden',
    LongDesc: '禁止されている。リソースにアクセスすることを拒否された。リクエストはしたが処理できないという意味。アクセス権がない場合や、ホストがアクセス禁止処分を受けた場合などに返される。例: 社内（イントラネット）からのみアクセスできるページに社外からアクセスしようとした。',
  },
  '404': {
    Desc: 'Not Found',
    LongDesc: 'リソースが見つかりませんでした。単に、アクセス権がない場合などにも使用されます。',
  },
  '405': {
    Desc: 'Method Not Allowed',
    LongDesc: '許可されていないメソッド。許可されていないメソッドを使用しようとした。例: POSTメソッドの使用が許されていない場所で、POSTメソッドを使用した場合に返される。',
  },
  '406': {
    Desc: 'Not Acceptable',
    LongDesc: '受理できない。Accept関連のヘッダに受理できない内容が含まれている場合に返される。例: サーバは英語か日本語しか受け付けられないが、リクエストのAccept-Language:ヘッダにzh（中国語）しか含まれていなかった。 例: サーバはapplication/pdfを送信したかったが、リクエストのAccept:ヘッダにapplication/pdfが含まれていなかった。 例: サーバはUTF-8の文章を送信したかったが、リクエストのAccept-Charset:ヘッダには、UTF-8が含まれていなかった。',
  },
  '407': {
    Desc: 'Proxy Authentication Required',
    LongDesc: 'プロキシ認証が必要である。プロキシの認証が必要な場合に返される。',
  },
  '408': {
    Desc: 'Request Timeout',
    LongDesc: 'リクエストタイムアウト。リクエストが時間以内に完了していない場合に返される。',
  },
  '409': {
    Desc: 'Conflict',
  LongDesc: '競合。要求は現在のリソースと競合するので完了出来ない。',
  },
  '410': {
    Desc: 'Gone',
  LongDesc: '消滅した。リソースは恒久的に移動・消滅した。どこに行ったかもわからない。404 Not Foundと似ているが、こちらは二度と復活しない場合に使われる。ただし、このコードは特別に設定しないと提示できないため、リソースが消滅しても404コードを出すサイトが多い。',
  },
  '411': {
    Desc: 'Length Required',
  LongDesc: '長さが必要。Content-Length ヘッダがないのでサーバがアクセスを拒否した場合に返される。',
  },
  '412': {
    Desc: 'Precondition Failed',
  LongDesc: '前提条件で失敗した。前提条件が偽だった場合に返される。例: リクエストのIf-Unmodified-Since:ヘッダに書いた時刻より後に更新があった場合に返される。',
  },
  '413': {
    Desc: 'Payload Too Large',
  LongDesc: '(RFC 7231) ペイロードが大きすぎる。リクエストエンティティがサーバの許容範囲を超えている場合に返す。例: アップローダの上限を超えたデータを送信しようとした。RFC 2616以前では、Request Entity Too Large（リクエストエンティティが大きすぎる）と定められていた。',
  },
  '414': {
    Desc: 'URI Too Long',
  LongDesc: '(RFC 7231) URIが大きすぎる。URIが長過ぎるのでサーバが処理を拒否した場合に返す。例: 画像データのような大きなデータをGETメソッドで送ろうとし、URIが何10kBにもなった場合に返す（上限はサーバに依存する）。 RFC 2616以前では、Request-URI Too Long（リクエストURIが大きすぎる）と定められていた。',
  },
  '415': {
    Desc: 'Unsupported Media Type',
  LongDesc: 'サポートしていないメディアタイプ。指定されたメディアタイプがサーバでサポートされていない場合に返す。',
  },
  '416': {
    Desc: 'Range Not Satisfiable',
  LongDesc: '(RFC 7233)レンジは範囲外にある。実リソースのサイズを超えるデータを要求した。たとえば、リソースのサイズが1024Byteしかないのに、1025Byteを取得しようとした場合などに返す。RFC 2616以前では、Requested Range Not Satisfiable（リクエストしたレンジは範囲外にある）と定められていた。',
  },
  '417': {
    Desc: 'Expectation Failed',
  LongDesc: 'Expectヘッダによる拡張が失敗。その拡張はレスポンスできない。またはプロキシサーバは、次に到達するサーバがレスポンスできないと判断している。具体例として、Expect:ヘッダに100-continue以外の変なものを入れた場合や、そもそもサーバが100 Continueを扱えない場合に返す。',
  },
  '418': {
    Desc: 'I\'m a teapot',
  LongDesc: '私はティーポット。HTCPCP/1.0の拡張ステータスコード。ティーポットにコーヒーを淹れさせようとして、拒否された場合に返すとされる、ジョークのコードである。',
  },
  '421': {
    Desc: 'Misdirected Request',
  LongDesc: '(RFC 7540)誤ったリクエスト。',
  },
  '422': {
    Desc: 'Unprocessable Entity',
  LongDesc: '処理できないエンティティ。WebDAVの拡張ステータスコード。',
  },
  '423': {
    Desc: 'Locked',
  LongDesc: 'ロックされている。WebDAVの拡張ステータスコード。リクエストしたリソースがロックされている場合に返す。',
  },
  '424': {
    Desc: 'Failed Dependency',
  LongDesc: '依存関係で失敗。WebDAVの拡張ステータスコード。',
  },
  '426': {
    Desc: 'Upgrade Required',
  LongDesc: 'アップグレード要求。Upgrading to TLS Within HTTP/1.1の拡張ステータスコード。',
  },
  '451': {
    Desc: 'Unavailable For Legal Reasons',
  LongDesc: '法的理由により利用不可。403 Forbiddenから派生したステータスコード。',
  },
  '500': {
    Desc: 'Internal Server Error',
    LongDesc: 'サーバ内部にエラーが発生した場合に返されます。例えば、CGIとして動作させているプログラムに文法エラーがあったり、設定に誤りがあった場合などに返されます。',
  },
  '501': {
    Desc: 'Not Implemented',
    LongDesc: '実装されていないメソッドを使用した場合に返されます。例えば、WebDAVが実装されていないサーバに対してWebDAVで使用するメソッド（MOVEやCOPY）を使用した場合に返されます。',
  },
  '502': {
    Desc: 'Bad Gateway',
    LongDesc: 'ゲートウェイ・プロキシサーバは不正な要求を受け取り、これを拒否した場合に返されます。',
  },
  '503': {
    Desc: 'Service Unavailable',
    LongDesc: 'サービスが一時的に過負荷やメンテナンスで使用不可能である場合に返されます。例えば、アクセスが殺到して処理不能に陥った場合に返されます。',
  },
  '504': {
    Desc: 'Gateway Timeout',
    LongDesc: 'ゲートウェイ・プロキシサーバはURIから推測されるサーバからの適切なレスポンスがなくタイムアウトした場合に返されます。',
  },
  '505': {
    Desc: 'HTTP Version Not Supported',
    LongDesc: 'リクエストがサポートされていないHTTPバージョンである場合に返されます。',
  },
  '506': {
    Desc: 'Variant Also Negotiates',
    LongDesc: 'Transparent Content Negotiation in HTTPで定義されている拡張ステータスコード。',
  },
  '507': {
    Desc: 'Insufficient Storage',
    LongDesc: 'WebDAVの拡張ステータスコードです。リクエストを処理するために必要なストレージの容量が足りない場合に返されます。',
  },
  '508': {
    Desc: 'Loop Detected',
    LongDesc: 'WebDAVの拡張ステータスコードです。ループを検出した場合に返されます。',
  },
  '509': {
    Desc: 'Bandwidth Limit Exceeded',
    LongDesc: 'そのサーバに設定されている帯域幅（転送量）を使い切った場合に返されます。',
  },
  '510': {
    Desc: 'Not Extended',
    LongDesc: 'HTTP Extension Frameworkで定義されている拡張ステータスコードです。拡張できない場合に返されます。',
  },
  '511': {
    Desc: 'Network Authentication Required',
    LongDesc: 'ネットワークに対する認証が必要な場合に返されます。キャプティブポータルでの使用を意図しており、RFC 6585 で規定されています。',
  },
};