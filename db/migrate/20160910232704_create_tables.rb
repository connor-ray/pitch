class CreateTables < ActiveRecord::Migration
  def change
  	create_table :group_chats do |t|
  		t.string :chat_name, presence: true

  		t.timestamps
  	end

  	create_table :users_groups do |t|
  		t.integer :user_id
  		t.integer :group_chat_id
  		
  		t.timestamps
  	end

  	create_table :pitches do |t|
  		t.string :title, presence: true
  		t.datetime :start_time, presence: true
  		t.datetime :deadline, presence: true

  		t.timestamps
  	end

  	create_table :proposals do |t|
  		t.string :location_title, presence: true
  		t.string :comment

  		t.timestamps
  	end


  	 create_table :votes do |t|
  	 	t.integer :proposal_id
  	 	t.integer :user_id

  	 	t.timestamps
  	end



  end
end
