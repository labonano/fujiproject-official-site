<?php
// IPアドレスを取得
$ip_address = $_SERVER['REMOTE_ADDR'];

// ユーザーエージェントを取得
$user_agent = $_SERVER['HTTP_USER_AGENT'];

// JSONファイルのパス
$file_path = 'access.json';

// 現在のアクセス時間
$access_time = date("Y-m-d H:i:s");

// 新しいアクセス情報を配列に格納
$new_access = array(
    'ip_address' => $ip_address,
    'user_agent' => $user_agent,
    'access_time' => $access_time
);

// 既存のデータを読み込む
if (file_exists($file_path)) {
    $current_data = json_decode(file_get_contents($file_path), true);
} else {
    $current_data = array();
}

// 新しいアクセス情報を追加
$current_data[] = $new_access;

// JSON形式で保存
file_put_contents($file_path, json_encode($current_data, JSON_PRETTY_PRINT));

?>
