# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_31_222557) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "phones", force: :cascade do |t|
    t.string "name"
    t.string "brand"
    t.float "price", default: 0.0
    t.float "deposit", default: 0.0
    t.text "trade_in"
    t.float "bogo", default: 0.0
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.float "aal", default: 0.0
    t.boolean "trade_in?", default: false
  end

  create_table "plans", force: :cascade do |t|
    t.string "name"
    t.text "prices"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
