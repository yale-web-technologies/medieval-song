require 'test_helper'

class ExternalSongTextsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @external_song_text = external_song_texts(:one)
  end

  test "should get index" do
    get external_song_texts_url
    assert_response :success
  end

  test "should get new" do
    get new_external_song_text_url
    assert_response :success
  end

  test "should create external_song_text" do
    assert_difference('ExternalSongText.count') do
      post external_song_texts_url, params: { external_song_text: {  } }
    end

    assert_redirected_to external_song_text_url(ExternalSongText.last)
  end

  test "should show external_song_text" do
    get external_song_text_url(@external_song_text)
    assert_response :success
  end

  test "should get edit" do
    get edit_external_song_text_url(@external_song_text)
    assert_response :success
  end

  test "should update external_song_text" do
    patch external_song_text_url(@external_song_text), params: { external_song_text: {  } }
    assert_redirected_to external_song_text_url(@external_song_text)
  end

  test "should destroy external_song_text" do
    assert_difference('ExternalSongText.count', -1) do
      delete external_song_text_url(@external_song_text)
    end

    assert_redirected_to external_song_texts_url
  end
end
