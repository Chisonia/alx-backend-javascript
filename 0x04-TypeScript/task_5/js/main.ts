// task_5/js/main.ts

// Define the MajorCredits interface
interface MajorCredits {
    credits: number;
    brand: 'major';
  }
  
  // Define the MinorCredits interface
  interface MinorCredits {
    credits: number;
    brand: 'minor';
  }
  
  // Function to sum MajorCredits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'major',
    };
  }
  
  // Function to sum MinorCredits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'minor',
    };
  }
  
  // Example usage
  const major1: MajorCredits = { credits: 30, brand: 'major' };
  const major2: MajorCredits = { credits: 40, brand: 'major' };
  
  const minor1: MinorCredits = { credits: 15, brand: 'minor' };
  const minor2: MinorCredits = { credits: 25, brand: 'minor' };
  
  const totalMajorCredits = sumMajorCredits(major1, major2);
  const totalMinorCredits = sumMinorCredits(minor1, minor2);
  
  console.log('Total Major Credits:', totalMajorCredits);  // Total Major Credits: { credits: 70, brand: 'major' }
  console.log('Total Minor Credits:', totalMinorCredits);  // Total Minor Credits: { credits: 40, brand: 'minor' }
  