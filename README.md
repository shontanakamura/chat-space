# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
has_many :comments
has_many :groups through:  :user_groups
has_many :user_groups

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|comment|text|
|image|string|
|user_id|integer|null:false,foreign_key: true|
｜group_id|integer|null:false,foreign_key: true|
### Association
belongs_to :user
belongs_to :group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
has_many :comment
has_many :users, through: :user_groups
has_many :user_groups

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false,foreign_key: true|
|group_id|integer|null: false,foreign_key: true|
### Association
belongs_to :user 
belongs_to :group



