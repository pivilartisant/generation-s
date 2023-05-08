import cv2
import json

# Load the Haar Cascade model for face detection
face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

# Open the default camera
cap = cv2.VideoCapture(0)
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1920)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 1080)


# Define the width and height of each section
section_width = cap.get(cv2.CAP_PROP_FRAME_WIDTH) / 3
section_height = cap.get(cv2.CAP_PROP_FRAME_HEIGHT)

# Initialize the results dictionary
results = {
    'section1': 0,
    'section2': 0,
    'section3': 0
}

while True:
    # Read a frame from the camera
    ret, frame = cap.read()

    # Flip the frame vertically
    frame = cv2.flip(frame, 1)

    # Convert the frame to grayscale for face detection
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect faces in the frame using the Haar Cascade model
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=10)

    # Initialize section counts to 0
    section_counts = [0, 0, 0]

    # Loop through each face and track it in the correct section
    for (x, y, w, h) in faces:
        section_num = int(x / section_width)  # Determine which section the face is in
        section_counts[section_num] += 1  # Increment the section count for this frame
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)  # Draw a rectangle around the face

    # Update the results dictionary with the current section counts
    results['section1'] = section_counts[0]
    results['section2'] = section_counts[1]
    results['section3'] = section_counts[2]

    # Draw rectangles around each section
    for i in range(3):
        x1 = int(i * section_width)
        y1 = 0
        x2 = int((i + 1) * section_width)
        y2 = int(section_height)
        cv2.rectangle(frame, (x1, y1), (x2, y2), (255, 0, 0), 2)  # Draw a rectangle around the section

    # Display the section counts on the frame
    for i in range(3):
        section_num = i + 1
        num_people = section_counts[i]
        cv2.putText(frame, f'Section {section_num}: {num_people} people', (int(i * section_width), 20), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 255, 0), 2)

    # Display the frame
    cv2.imshow('frame', frame)

    # Write the results to a JSON file
    with open('results.json', 'w') as f:
        json.dump(results, f)

    # Exit the loop if the 'q' key is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the camera and close the window
cap.release()
cv2.destroyAllWindows()
