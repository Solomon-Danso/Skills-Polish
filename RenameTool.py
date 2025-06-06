import os

def rename_images_in_folder(folder_path):
    # Supported image extensions
    image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp']

    # Get and sort image files
    images = sorted([
        f for f in os.listdir(folder_path)
        if os.path.splitext(f)[1].lower() in image_extensions
    ])

    # Temp rename step to avoid filename conflicts
    for i, filename in enumerate(images):
        ext = os.path.splitext(filename)[1].lower()
        temp_name = f"temp_{i}{ext}"
        os.rename(os.path.join(folder_path, filename), os.path.join(folder_path, temp_name))

    # Get the temp-renamed files
    temp_images = sorted([
        f for f in os.listdir(folder_path)
        if f.startswith("temp_")
    ])

    # Final rename in strict order
    for i, temp_file in enumerate(temp_images, start=1):
        ext = os.path.splitext(temp_file)[1].lower()
        new_name = f"{i}{ext}"
        os.rename(
            os.path.join(folder_path, temp_file),
            os.path.join(folder_path, new_name)
        )

    print("Renaming completed in strict order.")

# Usage
rename_images_in_folder("/Users/glydetek/Downloads/Cakes2")
