require 'test_helper'

class SongTextsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @song_text = song_texts(:one)
  end

  test "should get index" do
    get song_texts_url
    assert_response :success
  end

  test "should get new" do
    get new_song_text_url
    assert_response :success
  end

  test "should create song_text" do
    assert_difference('SongText.count') do
      post song_texts_url, params: { song_text: { is_primary_version: @song_text.is_primary_version, text: @song_text.text } }
    end

    assert_redirected_to song_text_url(SongText.last)
  end

  test "should show song_text" do
    get song_text_url(@song_text)
    assert_response :success
  end

  test "should get edit" do
    get edit_song_text_url(@song_text)
    assert_response :success
  end

  test "should update song_text" do
    patch song_text_url(@song_text), params: { song_text: { is_primary_version: @song_text.is_primary_version, text: @song_text.text } }
    assert_redirected_to song_text_url(@song_text)
  end

  test "should destroy song_text" do
    assert_difference('SongText.count', -1) do
      delete song_text_url(@song_text)
    end

    assert_redirected_to song_texts_url
  end
end
