<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $data = [
            [
                'name' => 'もりお',
                'content' => 'プッシュアップ',
                'created_at' => date('Ymd'),
                'updated_at' => date('Ymd')
            ],
            [
                'name' => 'なかやまきんに君',
                'content' => 'カーフレイズ',
                'created_at' => date('Ymd'),
                'updated_at' => date('Ymd')
            ],            
            [
                'name' => 'シャイニー薊',
                'content' => 'スクワット',
                'created_at' => date('Ymd'),
                'updated_at' => date('Ymd')
            ]
        ];

        DB::table('posts')->insert($data);
    }
}
