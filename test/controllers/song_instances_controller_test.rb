require 'test_helper'

class SongInstancesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @song_instance = song_instances(:one)
  end

  test "should get index" do
    get song_instances_url
    assert_response :success
  end

  test "should get new" do
    get new_song_instance_url
    assert_response :success
  end

  test "should create song_instance" do
    assert_difference('SongInstance.count') do
      post song_instances_url, params: { song_instance: { canvas_id: @song_instance.canvas_id, folio: @song_instance.folio, manuscript_id: @song_instance.manuscript_id, song_id: @song_instance.song_id, song_text: @song_instance.song_text, title: @song_instance.title, verse_form_id: @song_instance.verse_form_id } }
    end

    assert_redirected_to song_instance_url(SongInstance.last)
  end

  test "should show song_instance" do
    get song_instance_url(@song_instance)
    assert_response :success
  end

  test "should get edit" do
    get edit_song_instance_url(@song_instance)
    assert_response :success
  end

  test "should update song_instance" do
    patch song_instance_url(@song_instance), params: { song_instance: { canvas_id: @song_instance.canvas_id, folio: @song_instance.folio, manuscript_id: @song_instance.manuscript_id, song_id: @song_instance.song_id, song_text: @song_instance.song_text, title: @song_instance.title, verse_form_id: @song_instance.verse_form_id } }
    assert_redirected_to song_instance_url(@song_instance)
  end

  test "should destroy song_instance" do
    assert_difference('SongInstance.count', -1) do
      delete song_instance_url(@song_instance)
    end

    assert_redirected_to song_instances_url
  end
end
