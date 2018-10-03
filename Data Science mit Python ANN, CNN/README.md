# Vorbereitung:

## A. Install Python and Anaconda

1. Installieren Python und Anaconda: https://www.anaconda.com/download/
* Wähl dein Betriebsystem aus (Windows, OS oder Linux)
* Drück auf "Download" unter dem "Python 3.7 version"
* Schließ das Fenster "Get Started with the Anaconda Cheat Sheet"

2. Prüf ob alles gut installiert wurde: schreib in Anaconda Prompt (du findest das im Windows-Menü unter "Anaconda 3") python.
Als Ergebnis sollst du bekommen die folgende Information: Python .... |Anaconda custom <64-bit>...

3. Du sollst auch die Daten herunterladen. Die Deten findest du hier im Repo in den Folder ANN und CNN.

## B. Installation Theano, TensorFlow und Keras

**Für Mac users:**
Gib in terminal oder in Anaconda Prompt die folgenden Befehle:
pip install theano
pip install tensorflow
pip install keras
conda update --all

**Für Windows and Linux users:**
In Spyder EDI (aus Anaconda Navigator), geh zo Tools und mach Anaconda Prompt auf. Gib da die folgenden Befehle:

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

**Installation TensorFlow GPU (optional):**
pip install tensorflow-gpu
