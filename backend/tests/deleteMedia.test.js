/**
 * @file media.test.js
 * @description This file contains Jest test cases for testing the /media functionality of the API.
 * @author Kozeta Pajaj
 * @date 03/18/2025
 * 
 * - Create a new media and delete it to verify that deletion works correctly.
 * - Ensure that the API returns correct acknowledgment and deletedCount values.
 * 
 **/

const { createMedia, deleteMedia } = require('../media');
// Sample media data used for testing
const mediaData = {
    "media_code": "M007",
    "media_path": "/uploads/gym1.jpg",
    "description": "Testing"
  }

test('Delete media test item', async () => {         
    var newMedia = await createMedia(mediaData); 
    const result = await deleteMedia(newMedia.insertedId);
    expect(result.acknowledged).toBe(true);
    expect(result.deletedCount).toBe(1);
});