type Point = {
	x:number;
	y:number;
}

type Note = {
	id: string;
	length: number;
	at: number;
};

type GraphNote = {
	position:number;
	length: number;
	i: number;
}

// dirty should be clear
type NotePoint = Note & {
	position:number;
	index?: number;
	i: number;
	oldI?: number;
	oldLength?: number;
	oldPosition?:number;
};

type SelectZone = {
	x1:number;
	x2:number;
	y1:number;
	y2:number;
}



type MidiTask = {
	start: number[];
	end: number[];
}

type DeepMidi = Note[][];

type FlatMidi = MidiTask[];

type WaveConfig = {
    sine: number,
	square: number;
	saw: number;
	saw2: number;
	tech: number;
};

type WaveConfigFull = WaveConfig & {
	noise: number,
	fm: number,
	fmFreq: number,
	offset: number,
	voices: number,
	octave: number
}

type  FilterConfig = {
	cutoff: number;
	resonance: number;
	envelope: number;
	on: boolean;
};


type EnvelopeConfig = {
	attack: number,
	decay: number,
	sustain: number,
	release: number
}

type EnvelopeLibConfig = {
	filter: EnvelopeConfig;
	gain: EnvelopeConfig
}

type Sequence = number[][];
type SequenceConfig = {
	on: boolean;
	sequence: number[][]
}


type SynthConfig = {
	wave: WaveConfigFull;
	env: EnvelopeLibConfig;
	filter: FilterConfig;
	sequence: SequenceConfig;
}

type SynthPreset = {
	lib: string[],
	active: string,
	setPreset: (id:string)=>void;
}