Vorbereitung:

*A. Install Python and Anaconda*

1. Installieren Python und Anaconda: https://www.anaconda.com/download/
1a. Wähl dein Betriebsystem aus (Windows, OS oder Linux)
1b. Drück auf "Download" unter dem "Python 3.7 version"
1c. Schließ das Fenster "Get Started with the Anaconda Cheat Sheet"

2. Prüf ob alles gut installiert wurde: schreib in Anaconda Prompt (du findest das im Windows-Menü unter "Anaconda 3") python.
Als Ergebnis sollst du bekommen die folgende Information: Python .... |Anaconda custom <64-bit>...

3. Du sollst auch die Daten herunterladen. Die Deten findest du hier: 

*B.Install Theano, TensorFlow and Keras *

- For Mac users:
Open your main terminal or the Anaconda Prompt and enter the following commands:
pip install theano
pip install tensorflow
pip install keras
conda update --all

- For Windows and Linux users:
In Spyder, go to Tools and Open Anaconda Prompt. Then enter the following commands:
1. Create a new environment with Anaconda and Python 3.7:
conda create -n tensorflow python=3.7 anaconda

2. Activate the environment:
activate tensorflow

3. After this you can install Theano, TensorFlow and Keras:
conda install theano
conda install mingw libpython
pip install tensorflow
pip install keras

4. Update the packages:
conda update --all

5. Run Spyder:
spyder

To install TensorFlow on your GPU (optional):
pip install tensorflow-gpu
