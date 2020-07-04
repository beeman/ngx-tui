module.exports = {
  name: 'tui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/tui',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
